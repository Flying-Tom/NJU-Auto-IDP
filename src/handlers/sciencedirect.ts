import { waitForElm, promiseTimeout } from "../utils/promise";

export function sciencedirect_handler() {
  promiseTimeout(waitForElm("#gh-inst-icon-btn"), 200).then(function (data) {
    console.log(data)
    console.log("already login");
  }, function (err) {
    console.log("need to login");
    console.error(err);

    const params = new URLSearchParams({
      entityId: "https://idp.nju.edu.cn/idp/shibboleth",
      appReturnURL: window.location.href.replace(/\/article\/pii\//, '/article/abs/pii/'),
    });
    window.location.href = "https://auth.elsevier.com/ShibAuth/institutionLogin?" + params.toString();

    const element = document.querySelector('[aria-label="Access through Nanjing University"]');
    if (element) {
      (element as HTMLInputElement).click();
    }
  })
}