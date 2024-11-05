import { waitForElm, promiseTimeout } from "../utils/promise";

export function acm_handler() {
  promiseTimeout(waitForElm(".institution__name"), 200).then(function (data) {
    console.log(data)
    console.log("already login");
  }, function (err) {
    console.log("need to login");
    console.error(err);

    const match = window.location.href.match(/\/doi\/abs\/[a-zA-Z0-9./]+/);
    const redirectUri = match ? match[0] : "";
    const params = new URLSearchParams({
      idp: "https://idp.nju.edu.cn/idp/shibboleth",
      redirectUri: redirectUri,
      federationId: "urn:mace:shibboleth:carsifed",
    });
    window.location.href = "https://dl.acm.org/action/ssostart?" + params.toString();
  })
}