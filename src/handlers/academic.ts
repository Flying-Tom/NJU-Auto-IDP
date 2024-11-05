import { acm_handler } from "./acm";
import { ieee_handler } from "./ieee";
// import { sciencedirect_handler } from "./sciencedirect";

export function academic_handler() {
  if (window.location.href.includes('ieee.org/abstract/document')) {
    ieee_handler();
  } else if (window.location.href.includes('acm.org')) {
    acm_handler();
  } else if (window.location.href.includes('sciencedirect')) {
    // sciencedirect_handler();
    return;
  }
}
