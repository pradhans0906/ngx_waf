(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{383:function(e,a,t){"use strict";t.r(a);var r=t(45),d=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"change-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-log"}},[e._v("#")]),e._v(" Change Log")]),e._v(" "),t("h2",{attrs:{id:"unreleased"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unreleased"}},[e._v("#")]),e._v(" [Unreleased]")]),e._v(" "),t("h3",{attrs:{id:"added"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("h3",{attrs:{id:"removed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removed"}},[e._v("#")]),e._v(" Removed")]),e._v(" "),t("h3",{attrs:{id:"changed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("h3",{attrs:{id:"fixed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_5-1-1-2021-04-23-gmt-0800"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-1-2021-04-23-gmt-0800"}},[e._v("#")]),e._v(" [5.1.1] - 2021-04-23 GMT+0800")]),e._v(" "),t("h3",{attrs:{id:"fixed-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-2"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("URL and Referer whitelist are not working.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_5-1-0-2021-04-20-gmt-0800"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-0-2021-04-20-gmt-0800"}},[e._v("#")]),e._v(" [5.1.0] - 2021-04-20 GMT+0800")]),e._v(" "),t("h3",{attrs:{id:"added-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-2"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("New built-in variable "),t("code",[e._v("waf_log")]),e._v(", which is not an empty string when this module has performed a inspection, but an empty string otherwise, mainly used in the directive "),t("code",[e._v("access_log")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("New built-in variable "),t("code",[e._v("waf_spend")]),e._v(", which records the time (in milliseconds) taken by this module to perform the inspection.")])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_5-0-0-2021-04-07-gmt-0800"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-0-0-2021-04-07-gmt-0800"}},[e._v("#")]),e._v(" [5.0.0] - 2021-04-07 GMT+0800")]),e._v(" "),t("h3",{attrs:{id:"warning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#warning"}},[e._v("#")]),e._v(" "),t("strong",[e._v("WARNING")])]),e._v(" "),t("p",[t("strong",[e._v("This version contains breaking changes.")])]),e._v(" "),t("h3",{attrs:{id:"added-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-3"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("A new mode "),t("code",[e._v("CACHE")]),e._v(" has been added, enabling this mode will cache the results of each inspection to improve performance.")])]),e._v(" "),t("li",[t("p",[e._v("New configuration "),t("code",[e._v("waf_cache")]),e._v(" has been added to set parameters related to cache.")])]),e._v(" "),t("li",[t("p",[e._v("Added directive "),t("code",[e._v("waf_cc_deny")]),e._v(" to set CC protection related parameters.")])]),e._v(" "),t("li",[t("p",[e._v("New directive "),t("code",[e._v("waf_priority")]),e._v(" has been added to set the priority of all checks except for POST checks.")])]),e._v(" "),t("li",[t("p",[e._v("The "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After",target:"_blank",rel:"noopener noreferrer"}},[e._v("Retry-Afte"),t("OutboundLink")],1),e._v(" response header is appended when the CC protection returns a 503 status code.")])])]),e._v(" "),t("h3",{attrs:{id:"removed-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removed-2"}},[e._v("#")]),e._v(" Removed")]),e._v(" "),t("ul",[t("li",[e._v("The directive "),t("code",[e._v("waf_cc_deny_limit")]),e._v(" is deprecated and replaced with the new directive "),t("code",[e._v("waf_cc_deny")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"changed-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-2"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Swaps the default priority of CC protection and IP whitelist inspection.")])]),e._v(" "),t("h3",{attrs:{id:"fixed-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-3"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Fixed a segmentation fault when the number of worker processes is greater than one.")])]),e._v(" "),t("li",[t("p",[e._v("Fixed a bug where CC protection statistics were sometimes inaccurate.")])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_4-0-0-2021-03-22-gmt-0800"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-0-0-2021-03-22-gmt-0800"}},[e._v("#")]),e._v(" [4.0.0] - 2021-03-22 GMT+0800")]),e._v(" "),t("h3",{attrs:{id:"warning-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#warning-2"}},[e._v("#")]),e._v(" "),t("strong",[e._v("WARNING")])]),e._v(" "),t("p",[t("strong",[e._v("This version contains breaking changes.")])]),e._v(" "),t("h3",{attrs:{id:"added-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-4"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Added some parameters to "),t("code",[e._v("waf_mode")]),e._v(" and "),t("code",[e._v("waf_cc_deny_limit")]),e._v(" ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/368db2b26e9d2a910c06e77f892740cefe9556d3",target:"_blank",rel:"noopener noreferrer"}},[e._v("368db2b"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("h3",{attrs:{id:"removed-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removed-3"}},[e._v("#")]),e._v(" Removed")]),e._v(" "),t("ul",[t("li",[e._v("Abort directive: "),t("code",[e._v("waf_mult_mount")]),e._v(". The function of this directive has been merged into the directive "),t("code",[e._v("waf_mode")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"changed-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-3"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Adds some parameters to the directive "),t("code",[e._v("waf_mode")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"fixed-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-4"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Fixed an error in the name of the built-in variable "),t("code",[e._v("waf_rule_details")]),e._v(",\nwhich was set to "),t("code",[e._v("waf_rule_deatails")]),e._v(" in a previous version of the code.")])]),e._v(" "),t("li",[t("p",[e._v("No more superfluous inspections.")])]),e._v(" "),t("li",[t("p",[e._v("Completely resolve compatibility issues with the "),t("code",[e._v("ngx_http_rewrite_module")]),e._v(".")])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_3-1-6-2021-03-07"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-6-2021-03-07"}},[e._v("#")]),e._v(" [3.1.6] - 2021-03-07")]),e._v(" "),t("h3",{attrs:{id:"fixed-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-5"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Correcting the order in which rules take effect ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/51c7824786c060f4b0dcffe77a4a1e04b775e04b",target:"_blank",rel:"noopener noreferrer"}},[e._v("51c7824"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("h2",{attrs:{id:"_3-1-5-2021-03-03"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5-2021-03-03"}},[e._v("#")]),e._v(" [3.1.5] - 2021-03-03")]),e._v(" "),t("h3",{attrs:{id:"fixed-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-6"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed a bug in the "),t("code",[e._v("config")]),e._v(" script that caused dependencies to not be checked correctly ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/075a27e4f7aaf7e78c45eac0c78c9634863be476#diff-b79606fb3afea5bd1609ed40b622142f1c98125abcfe89a76a661b0e8e343910",target:"_blank",rel:"noopener noreferrer"}},[e._v("075a27e"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_3-1-4-2021-03-02"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-2021-03-02"}},[e._v("#")]),e._v(" [3.1.4] - 2021-03-02")]),e._v(" "),t("h3",{attrs:{id:"changed-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-4"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Use safer string handling functions to avoid buffer overflows when conditions allow ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/177ae68cb019f47096e6065ec34aa0ef9be07567",target:"_blank",rel:"noopener noreferrer"}},[e._v("177ae68"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_3-1-3-2021-02-23"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-2021-02-23"}},[e._v("#")]),e._v(" [3.1.3] - 2021-02-23")]),e._v(" "),t("h3",{attrs:{id:"fixed-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-7"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Order of effectiveness of correction rules ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/857ec84c6519d88d1c1a5560a244dceffd413f3f",target:"_blank",rel:"noopener noreferrer"}},[e._v("857ec84"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_3-1-2-2021-01-18"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-2021-01-18"}},[e._v("#")]),e._v(" [3.1.2] - 2021-01-18")]),e._v(" "),t("h3",{attrs:{id:"fixed-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-8"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed a bug that caused module initialization to fail when the rule file was not writable ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/20acd27815d1f266d89c1557e93848c96117b8ff",target:"_blank",rel:"noopener noreferrer"}},[e._v("20acd27"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_3-1-1-2021-01-18"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-2021-01-18"}},[e._v("#")]),e._v(" [3.1.1] - 2021-01-18")]),e._v(" "),t("h3",{attrs:{id:"fixed-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-9"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Compatible with lower versions of gcc ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/becbbe022b9f6efa606e720d7cbcd6c5d6f22c33",target:"_blank",rel:"noopener noreferrer"}},[e._v("becbbe0"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_3-1-0-2021-01-17"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-0-2021-01-17"}},[e._v("#")]),e._v(" [3.1.0] - 2021-01-17")]),e._v(" "),t("h3",{attrs:{id:"note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("v3.0.3")]),e._v(" was skipped because a backward compatibility feature was added during the "),t("code",[e._v("v3.0.3")]),e._v(" test.")])]),e._v(" "),t("h3",{attrs:{id:"added-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-5"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Add debug log for easy troubleshooting ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/bac1d026e9e902d9a49881e899cba4965f3388a4",target:"_blank",rel:"noopener noreferrer"}},[e._v("bac1d02"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("h3",{attrs:{id:"fixed-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-10"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Fixed a segmentation fault ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/57d7719654caddc40ee655c797f0984f42c25495",target:"_blank",rel:"noopener noreferrer"}},[e._v("57d7719"),t("OutboundLink")],1),e._v(")。")])]),e._v(" "),t("li",[t("p",[e._v("More accurate visit frequency statistics ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/53d3b149a524252dbb9b8170e31f4b1f4895a6b7",target:"_blank",rel:"noopener noreferrer"}},[e._v("53d3b14"),t("OutboundLink")],1),e._v(").")])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_3-0-2-2021-01-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-2-2021-01-10"}},[e._v("#")]),e._v(" [3.0.2] - 2021-01-10")]),e._v(" "),t("h3",{attrs:{id:"note-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note-2"}},[e._v("#")]),e._v(" Note")]),e._v(" "),t("ul",[t("li",[e._v("Because of hotfixes performed on "),t("code",[e._v("v3.0.1")]),e._v(", all beta versions of "),t("code",[e._v("v3.0.2")]),e._v(" are voided, please do not use these beta versions.")])]),e._v(" "),t("h3",{attrs:{id:"fixed-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-11"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed a build error on "),t("code",[e._v("Alpine Linux")]),e._v(" ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/e989aa34370da73f03627601188ca33844372c4f",target:"_blank",rel:"noopener noreferrer"}},[e._v("e989aa3"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_3-0-1-2020-12-28"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-1-2020-12-28"}},[e._v("#")]),e._v(" [3.0.1] - 2020-12-28")]),e._v(" "),t("h3",{attrs:{id:"fixed-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-12"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed a segmentation fault when inspecting cookies ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/8dc2b56e9a8ae7c22cc5309ac0a060b0358f545b",target:"_blank",rel:"noopener noreferrer"}},[e._v("8dc2b56"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_3-0-0-2020-12-25"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-0-2020-12-25"}},[e._v("#")]),e._v(" [3.0.0] - 2020-12-25")]),e._v(" "),t("h3",{attrs:{id:"added-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-6"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Anti Challenge Collapsar now supports IPV6 ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/00fbc1c20ec964f6cd3bb992d756737e95b6c7ed",target:"_blank",rel:"noopener noreferrer"}},[e._v("00fbc1c"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("li",[t("p",[e._v("IP black and white lists support IPV6, and can recognize IPV6 strings such as "),t("code",[e._v("fe80::/10")]),e._v(" ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/8519b26f5fb9491ac60ae084247a0957c0931d0c",target:"_blank",rel:"noopener noreferrer"}},[e._v("8519b26"),t("OutboundLink")],1),e._v(").")])])]),e._v(" "),t("h3",{attrs:{id:"changed-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-5"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Delete some meaningless logs ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/bd279e7be872621fa75337722a9fae30b2ea6812",target:"_blank",rel:"noopener noreferrer"}},[e._v("bd279e7"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("li",[t("p",[e._v("Friendly error alerts ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/d1185b26a413e45dcf5ef479b0078aa57a4b5962",target:"_blank",rel:"noopener noreferrer"}},[e._v("d1185b2"),t("OutboundLink")],1),e._v(" & "),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/f2b617d5174eb1bc6982113415ddcb1f798ef703",target:"_blank",rel:"noopener noreferrer"}},[e._v("f2b617d"),t("OutboundLink")],1),e._v("). Warnings or error reporting when IP addresses in the rule file are invalid or IP address blocks overlap (does not detect all overlaps).")])]),e._v(" "),t("li",[t("p",[e._v("Faster IP matching ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/2b9e77404826666df301c3d6b3ce07a6968de266",target:"_blank",rel:"noopener noreferrer"}},[e._v("2b9e774"),t("OutboundLink")],1),e._v(").")])])]),e._v(" "),t("h3",{attrs:{id:"fixed-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-13"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Fixed a bug that caused the cookie inspection not work ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/87beed183e404c70411a2d35ea68ebbccccf5ff6",target:"_blank",rel:"noopener noreferrer"}},[e._v("87beed1"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("li",[t("p",[e._v("Modify the "),t("code",[e._v("config")]),e._v(" file to ensure that the latest module code is compiled when executing "),t("code",[e._v("make")]),e._v(" or "),t("code",[e._v("make modules")]),e._v(" ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/25f97f5e7f3792b131ab0ebb1bfe4b7fe5e330ae",target:"_blank",rel:"noopener noreferrer"}},[e._v("25f97f5"),t("OutboundLink")],1),e._v("). Before the fix, if only the files under "),t("code",[e._v("inc/")]),e._v(" changed, the latest code would not be compiled because the files under "),t("code",[e._v("inc/")]),e._v(" were not checked for changes.")])]),e._v(" "),t("li",[t("p",[e._v("Fixed a bug with incorrect IPV4 segment identification ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/73a22eb3538a24e9714bf8331946a5654df20cc1",target:"_blank",rel:"noopener noreferrer"}},[e._v("73a22eb"),t("OutboundLink")],1),e._v("). This bug could cause the subnet mask not to be generated correctly when a rule like "),t("code",[e._v("192.168.0.0/10")]),e._v(", i.e. the suffix is not a multiple of 8, appears in the rule.")])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_2-1-1-2020-12-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-2020-12-10"}},[e._v("#")]),e._v(" [2.1.1] - 2020-12.10")]),e._v(" "),t("h3",{attrs:{id:"added-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-7"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("h3",{attrs:{id:"changed-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-6"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("h3",{attrs:{id:"fixed-14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-14"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed a module startup failure error. The error message for this error is "),t("code",[e._v('nginx: [alert] could not open error log file: open() "ngx_waf: /logs/error.log" failed (2: No such file or directory)')]),e._v(" ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/0dfc46f2dfc7ed91977b501c868abf961966d4e1",target:"_blank",rel:"noopener noreferrer"}},[e._v("0dfc46f"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_2-1-0-2020-12-09"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-0-2020-12-09"}},[e._v("#")]),e._v(" [2.1.0] - 2020-12-09")]),e._v(" "),t("h3",{attrs:{id:"added-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-8"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Compatible with the mainline version of NGINX ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/f31f906b11fb00f54bfea504ca7c8c147a0be1d8",target:"_blank",rel:"noopener noreferrer"}},[e._v("f31f906"),t("OutboundLink")],1),e._v(" & "),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/7b4f897a4a332b43bf94de874f8ba8c3098aaee4",target:"_blank",rel:"noopener noreferrer"}},[e._v("65277d1"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("h3",{attrs:{id:"changed-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-7"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("h3",{attrs:{id:"fixed-15"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-15"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_2-0-2-2020-12-07"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-2-2020-12-07"}},[e._v("#")]),e._v(" [2.0.2] - 2020-12-07")]),e._v(" "),t("h3",{attrs:{id:"added-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-9"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("h3",{attrs:{id:"changed-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-8"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("h3",{attrs:{id:"fixed-16"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-16"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Fix for Anti Challenge Collapsar failing when "),t("code",[e._v("waf_mult_mount")]),e._v(" is disabled ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/048fe5c15863d9a3106387225774305aa5564726",target:"_blank",rel:"noopener noreferrer"}},[e._v("048fe5c"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("li",[t("p",[e._v("Fixed compile error caused by incorrect "),t("code",[e._v("#include")]),e._v(" ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/3fa298c6184618ea0cd6336783a4d7a2ed27469c",target:"_blank",rel:"noopener noreferrer"}},[e._v("3fa298c"),t("OutboundLink")],1),e._v(").")])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_2-0-1-2020-12-03"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-1-2020-12-03"}},[e._v("#")]),e._v(" [2.0.1] - 2020-12-03")]),e._v(" "),t("h3",{attrs:{id:"added-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-10"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("h3",{attrs:{id:"changed-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-9"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Instead of downloading the uthash dependency manually, you can install the system library with "),t("code",[e._v("yum install uthash-devel")]),e._v(" or "),t("code",[e._v("apt-get install uthash-dev")]),e._v(" ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/7cfc94bc64fa4f2c29bdf3b24e21aeb1ba412054",target:"_blank",rel:"noopener noreferrer"}},[e._v("7cfc94b"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("h3",{attrs:{id:"fixed-17"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-17"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed a bug that failed to compile under CentOS/RHEL 6 or 7 that was caused by not properly preventing macro redefinitions ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/28e1c8aca03375089c75df21c5db3c38013edde7",target:"_blank",rel:"noopener noreferrer"}},[e._v("28e1c8a"),t("OutboundLink")],1),e._v(" & "),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/566ae4a50f855674b256db84305a24e1b2a6bc6d",target:"_blank",rel:"noopener noreferrer"}},[e._v("566ae4a"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_2-0-0-2020-09-29"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-0-2020-09-29"}},[e._v("#")]),e._v(" [2.0.0] - 2020-09-29")]),e._v(" "),t("h3",{attrs:{id:"added-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-11"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("We can compile the module with "),t("code",[e._v("--add-dynamic-module")]),e._v(". Thanks for "),t("a",{attrs:{href:"https://github.com/dvershinin",target:"_blank",rel:"noopener noreferrer"}},[e._v("dvershinin"),t("OutboundLink")],1),e._v("'s work("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/pull/4",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/ADD-SP/ngx_waf/pull/4"),t("OutboundLink")],1),e._v(")。")])]),e._v(" "),t("h3",{attrs:{id:"changed-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-10"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Remove a default User-Agent rule that is "),t("code",[e._v("(?i)(? :Sogou web spider)")]),e._v(", as it will block non-malicious web spider("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/827d4e5bc48894ff9147e49799d3a9656fe7dd8a",target:"_blank",rel:"noopener noreferrer"}},[e._v("827d4e5"),t("OutboundLink")],1),e._v(").")])]),e._v(" "),t("li",[t("p",[e._v("Merge directives ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/ba92cfd53ce78da8ff4ed22d2bc71a47de4cbe25",target:"_blank",rel:"noopener noreferrer"}},[e._v("ba92cfd"),t("OutboundLink")],1),e._v("). These directives will be merged: "),t("code",[e._v("waf_check_ipv4")]),e._v(", "),t("code",[e._v("waf_check_url")]),e._v(", "),t("code",[e._v("waf_check_args")]),e._v(", "),t("code",[e._v("waf_check_ua")]),e._v(", "),t("code",[e._v("waf_check_referer")]),e._v(", "),t("code",[e._v("waf_check_cookie")]),e._v(", "),t("code",[e._v("waf_check_post")]),e._v(", "),t("code",[e._v("waf_check_cookie")]),e._v(", "),t("code",[e._v("waf_cc_deny")]),e._v(". The merged new directive is "),t("code",[e._v("waf_mode")]),e._v(", see "),t("RouterLink",{attrs:{to:"/advance/README-EN.html"}},[e._v("README")]),e._v(".")],1)])]),e._v(" "),t("h3",{attrs:{id:"fixed-18"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-18"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("The blank lines in the rules can now be read correctly ("),t("a",{attrs:{href:"https://github.com/ADD-SP/ngx_waf/commit/955cf2d240c4d66f815890e3ee9b88ccf906cf1d",target:"_blank",rel:"noopener noreferrer"}},[e._v("955cf2d"),t("OutboundLink")],1),e._v(").")])])])}),[],!1,null,null,null);a.default=d.exports}}]);