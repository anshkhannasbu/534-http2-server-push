mm-webreplay data/mm-capture/chase data/push_strategies/same-ip-mergelist-strategies/chase/push_critical_ref.json same-ip mm-delay 100 browsertime -n 1 --chrome.collectNetLog https://www.chase.com/
#mm-webreplay data/mm-capture/chase data/push_strategies/same-ip-mergelist-strategies/chase/push_critical.json same-ip mm-delay 100 browsertime -n 1 --chrome.collectNetLog https://www.chase.com/
#mm-webreplay data/mm-capture/chase data/push_strategies/same-ip-mergelist-strategies/chase/nopush.json same-ip mm-delay 100 browsertime -n 1 --chrome.collectNetLog https://www.chase.com/
