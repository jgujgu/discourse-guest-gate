# name: guest-gate
# about: Force guest users to create an account by preventing them from seeing more topics
# version: 0.3
# authors: Vinoth Kannan (vinothkannan@vinkas.com) and jgujgu and michael@discoursehosting.com
# url: https://github.com/discoursehosting/discourse-guest-gate

enabled_site_setting :guest_gate_enabled

register_asset "stylesheets/guest-gate.scss"
