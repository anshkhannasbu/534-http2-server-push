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

from datetime import datetime
import pytz

import mitmproxy

from mitmproxy import version,ctx
from mitmproxy.utils import strutils
from mitmproxy.net.http import status_codes

PARAMS={}
class Mitm2html:

    def load(self, loader):
        loader.add_option(
            name = "htmlurl",
            typespec = str,
            default = "",
            help = "url to extract html",
        )

    def response(self, flow):
        """
           Called when a server response has been received.
        """
        if flow.request.url == ctx.options.htmlurl:
            if flow.response.get_content() is not None:
                print(flow.response.get_content().decode())


    def done(self):
        """
            Called once on script shutdown, after any other events.
        """
        ctx.log("Dump finished ")

addons = [
    Mitm2html()
]
