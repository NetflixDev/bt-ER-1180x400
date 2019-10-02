import { createSideBySidePostMarkups } from "./horizontalSideBySide.js";
import horizontalStacked from "./horizontalStacked.js";
import { Align } from "ad-view";
import { ObjectUtils } from "ad-utils";

const {
  leftPostMarkup,
  offCenterLeftPostMarkup,
  centerPostMarkup,
  offCenterRightPostMarkup,
  rightPostMarkup
} = createSideBySidePostMarkups({
  defaultArgs: {
    ctaLogoOffset: 25,
    headlineFontSize: 20,
    headlineLockupOffset: 16
  },
  yAlign: {
    type: Align.BOTTOM,
    offset: -26
  },
  layoutXAligns: {
    leftXAlign: {
      type: Align.LEFT,
      against: 62
    },
    offCenterLeftXAlign: {
      type: Align.LEFT,
      against: 225
    },
    centerXAlign: Align.CENTER,
    offCenterRightXAlign: {
      type: Align.RIGHT,
      offset: -246
    },
    rightXAlign: {
      type: Align.RIGHT,
      offset: -84
    }
  }
});

function stackedPostMarkup() {
  horizontalStacked({
    brandingLockupOffset: 20,
    brandingLockupRightPadding: 32,
    headlineFontSize: 23
  });
}

export {
  leftPostMarkup,
  offCenterLeftPostMarkup,
  centerPostMarkup,
  offCenterRightPostMarkup,
  rightPostMarkup,
  stackedPostMarkup
};
