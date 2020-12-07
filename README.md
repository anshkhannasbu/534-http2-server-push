A modified fork of https://github.com/COMSYS/http2-conext-push..

Please read software README on instruction on how to setup the project.

After doing the setup, To do a test run:

1. Go the eval folder in x-dataset/interleaving_push/

2. Setup ENV variables:

```
export CHROMEDRIVER_BINARY=/usr/bin/chromedriver
export CHROME_BINARY_PUSH=/usr/bin/google-chrome
export MAHIMAHI_ROOT={Path to MahiMahi-h2o in software/}
```

3. Run the following command:

```
python run_interleaving_eval.py --browsertime-dir /usr/local/lib/node_modules/browsertime/ --replay-dir ../recordings/data/mm-capture/ --strategy-dir ../recordings/data/push_strategies/same-ip-mergelist-strategies/ --mergefile-dir ../recordings/data/mergefiles/ --logs-dir ../recordings/data/logs/ --destination {your results directory} --runs {the number of runs for each website}

```

4. You can configure latencies & bandwidth in run_interleaving_eval.py. The websites you want to run for and strategies in common.py file in same directory.

5. Each run would report speedIndex metrics, which were used for results.

6. To run for a new website, first generate data by looking into ``` /interleaving_push/recordings/record_creation/how_to_run.txt ```.  Then proceed with from step 1.
