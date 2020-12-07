"""
This inline script can be used to dump url response bodies to stdout.
"""

import json
import sys
import base64
import zlib
import sys
import os
import string
import random
import pprint

import mitmproxy

from mitmproxy import version
from mitmproxy.utils import strutils
from mitmproxy.net.http import status_codes

class Mitm2css:

    def response(self, flow):
        """
           Called when a server response has been received.
        """
        content_type = flow.response.headers.get("content-type", "").lower();
        if 'css' in content_type:
            if flow.response.get_content() is not None:
                print(flow.response.get_content().decode())  

    def done(self):
        """
            Called once on script shutdown, after any other events.
        """
        ctx.log("Dump finished ")

addons = [
    Mitm2css()
]

