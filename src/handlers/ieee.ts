import { waitForElm, promiseTimeout } from "../utils/promise";

export function ieee_handler() {
  promiseTimeout(waitForElm(".inst-name"), 200).then(function (data) {
    console.log(data)
    console.log("already login");
  }, function (err) {
    console.log("need to login");
    console.error(err);

    const params = new URLSearchParams({
      entityId: "https://idp.nju.edu.cn/idp/shibboleth",
      url: window.location.href,
    });
    window.location.href = "https://ieeexplore.ieee.org/servlet/wayf.jsp?" + params.toString();
  })
}