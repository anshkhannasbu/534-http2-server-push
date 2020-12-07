import os
import sys
import json
from argparse import ArgumentParser
import gzip
import urlparse


# sys.path.append(os.path.join(os.path.dirname(__file__), '../../code'))

def valid_requests(req, page_id, whitelist_hosts, allowed_content_types):
    if req["pageref"] != page_id:
        return False
    fnd = False
    #print(req)
    for host in whitelist_hosts:
        if host in req["request"]["url"]:
            fnd = True
    
    if not fnd:
        #print req["request"]["url"]
        return fnd
    
    fnd = False
    #print(req["response"]["content"]["mimeType"])
    for cnt in allowed_content_types:
        if cnt in req["response"]["content"]["mimeType"]:
            fnd = True

    if not fnd:
        #print req["request"]["url"]
        return fnd

    fnd = False
    for hdr in req["request"]["headers"]:
        if hdr["name"] == ":method" or hdr["name"] == "method":
            #print("here")
            if hdr["value"] == "GET":
                fnd = True
                break
            #else:
                #print(req["request"]["url"])

    if "method" in req["request"].keys():
        if req["request"]["method"] == "GET":
            fnd = True
    #if not fnd:
        #print(json.dumps(req))
    return fnd

def extract_url_ordered(resources):
    urls = []
    for req in resources:
        if "html" in req["response"]["content"]["mimeType"]:
            if not req["request"]["url"] in urls:
                urls.append(req["request"]["url"])
    for req in resources:
        if "css" in req["response"]["content"]["mimeType"]:
            if not req["request"]["url"] in urls:
                urls.append(req["request"]["url"])
    for req in resources:
        if "script" in req["response"]["content"]["mimeType"]:
            if not req["request"]["url"] in urls:
                urls.append(req["request"]["url"])

    return urls

def create_strategy(push_scenarios, args, dependencies):
    fname = "/mobile_strategy.json"
    with open(args.emptyconfig) as f:
        empty_config = json.load(f)
    print(empty_config)
    configs = empty_config["push_configs"]
    mark_pushed = {}
    for scenario in push_scenarios:
        config = {}
        host = urlparse.urlparse(scenario["request"]["url"]).hostname
        path = urlparse.urlparse(scenario["request"]["url"]).path
        config["push_host"] = host
        for hdr in scenario["request"]["headers"]:
            if hdr["name"] == ":path":
                config["push_trigger"] = hdr["value"]

        config["push_trigger"] = path
        assert config["push_trigger"]

        #resources = set([req["request"]["url"] for req in dependencies[scenario["request"]["url"]][0:]])
        #print(resources)
        resources = []
        for req in dependencies[scenario["request"]["url"]]:
            p_url = req["request"]["url"]
            if not p_url in mark_pushed.keys():
                resources.append(req)
            mark_pushed[p_url] = 1
            for req2 in dependencies[p_url]:
                c_url = req2["request"]["url"]
                if c_url in mark_pushed.keys():
                    continue
                resources.append(req2)
                mark_pushed[c_url] = 1
            
        config["push_resources"] = extract_url_ordered(resources)
        if len(config["push_resources"]) > 0:
            configs.append(config)

    empty_config["push_configs"] = configs
    fpath = args.res + fname

    with open(fpath, 'w') as fd:
        json.dump(empty_config, fd, indent=4)
    
    print("Dumping config to " + fpath)
    print(json.dumps(empty_config))
    print("----------------------------------")
    

def calculate_dependencies(filtered_requests, args):
    mean_time = 0.0
    for req in filtered_requests:
        mean_time += req["time"]

    mean_time = mean_time/len(filtered_requests)

    dependencies = {}
    for req in filtered_requests:
        if req["request"]["url"] not in dependencies.keys():
            dependencies[req["request"]["url"]] = []
    
        if "_initiator" in req.keys() and len(req["_initiator"]) > 0:
            if req["_initiator"] not in dependencies.keys():
                dependencies[req["_initiator"]] = []
            dependencies[req["_initiator"]].append(req)
    
    push_scenarios = []
    for req in filtered_requests:
        if req["time"] >= mean_time/2.0:
            push_scenarios.append(req)
    
    create_strategy(push_scenarios, args, dependencies)
    



def main(args):
    with gzip.open(args.har) as fd:
        har_log = json.load(fd)
    
    #print(har_log["log"])
    page_id = str(har_log["log"]["pages"][0]["id"])
    filtered_requests = []

    requests = har_log["log"]["entries"]

    whitelist_hosts = []
    with open(args.mergelist) as fd:
    	host = fd.readline().strip()
        while host:
            if len(host) > 0:
                whitelist_hosts.append(host)
            host = fd.readline().strip()

    print(whitelist_hosts, page_id)
    allowed_content_types = ["html", "css", "php", "javascript"]
    for req in requests:
        #print(req["request"]["url"])
        if valid_requests(req, page_id, whitelist_hosts, allowed_content_types):
            #print(req["request"]["url"])
            filtered_requests.append(req)

    #print(len(filtered_requests))
    #print(json.dumps(filtered_requests))
    calculate_dependencies(filtered_requests, args)





if __name__ == "__main__":
	argparser = ArgumentParser()
	argparser.add_argument('--har-file', dest = 'har', required=True)
	argparser.add_argument('--mergelist', dest = 'mergelist', required=True)
	argparser.add_argument('--result-dir', dest = 'res', required=True)
        argparser.add_argument('--nopush-config',dest = 'emptyconfig', required=True)
	args = argparser.parse_args()

	main(args)

