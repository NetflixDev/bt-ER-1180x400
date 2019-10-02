import { Styles, Markup, Align, Effects } from "ad-view";
import { ImageManager } from "ad-control";
import { Animation } from "@common/js/Animation.js";
import { Control } from "@common/js/Control.js";
import CanvasIris from "@common/js/CanvasIris.js";
import {
  UIComponent,
  UIBorder,
  UIButton,
  UIImage,
  TextFormat,
  UITextField,
  UISvg
} from "ad-ui";
import { ObjectUtils } from "ad-utils";
import baseInit from "./baseInit.js";

export { mainInit, stackedInit };

function stackedInit(T) {
  baseInit(T, {
    logoWidth: 150,
    ctaWidth: 151,
    ctaMaxWidth: 151,
    ctaHeight: 40,
    extraCtaLogoInit: cta => {
      cta.setAttribute("font-size", 17);
    }
  });
}

function mainInit(T) {
  baseInit(T, {
    logoWidth: 140,
    ctaWidth: 139,
    ctaMaxWidth: 150,
    ctaHeight: 35,
    extraCtaLogoInit: cta => {
      cta.setAttribute("font-size", 15);
    }
  });
}
