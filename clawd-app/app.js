const CLAW_SVGS = {"idle": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-15 -25 45 45\" width=\"500\" height=\"500\">\n  <defs>\n    <style>\n      .breathe-anim {\n        transform-origin: 7.5px 13px;\n        animation: breathe 3.2s infinite ease-in-out;\n      }\n\n      .eyes-blink {\n        transform-origin: 7.5px 9px;\n        animation: eye-blink 4s infinite ease-in-out;\n      }\n\n      #eyes-js, #body-js, #shadow-js {\n        transition: transform 0.2s ease-out;\n      }\n      #shadow-js {\n        transform-origin: 7.5px 15px;\n      }\n\n      @keyframes breathe {\n        0%, 100% { transform: scale(1, 1) translate(0, 0); }\n        50% { transform: scale(1.02, 0.98) translate(0, 0.5px); }\n      }\n\n      @keyframes eye-blink {\n        0%, 10%, 100% { transform: scaleY(1); }\n        5% { transform: scaleY(0.1); }\n      }\n    </style>\n  </defs>\n\n  \n  <g id=\"shadow-js\">\n    <rect x=\"3\" y=\"15\" width=\"9\" height=\"1\" fill=\"#000000\" opacity=\"0.5\"/>\n  </g>\n\n  \n  <g id=\"legs\" fill=\"#DE886D\">\n    <rect x=\"3\" y=\"11\" width=\"1\" height=\"4\"/>\n    <rect x=\"5\" y=\"11\" width=\"1\" height=\"4\"/>\n    <rect x=\"9\" y=\"11\" width=\"1\" height=\"4\"/>\n    <rect x=\"11\" y=\"11\" width=\"1\" height=\"4\"/>\n  </g>\n\n  \n  <g id=\"body-js\">\n    <g class=\"breathe-anim\">\n      \n      <rect id=\"torso\" x=\"2\" y=\"6\" width=\"11\" height=\"7\" fill=\"#DE886D\"/>\n      \n      <rect x=\"0\" y=\"9\" width=\"2\" height=\"2\" fill=\"#DE886D\"/>\n      \n      <rect x=\"13\" y=\"9\" width=\"2\" height=\"2\" fill=\"#DE886D\"/>\n      \n      <g id=\"eyes-js\" fill=\"#000000\">\n        <g class=\"eyes-blink\">\n          <rect x=\"4\" y=\"8\" width=\"1\" height=\"2\"/>\n          <rect x=\"10\" y=\"8\" width=\"1\" height=\"2\"/>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>", "walk": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-15 -25 45 45\" width=\"500\" height=\"500\">\n  <defs>\n    <style>\n      .body-hunch {\n        transform-origin: 7.5px 15px;\n        animation: hunch-walk 2s infinite alternate ease-in-out;\n      }\n      .leg-1 { animation: sneak-1 0.5s infinite linear; transform-origin: top center; transform-box: fill-box; }\n      .leg-2 { animation: sneak-2 0.5s infinite linear; transform-origin: top center; transform-box: fill-box; }\n      .shadow-sneak {\n        transform-origin: 7.5px 15.5px;\n        animation: shadow-shift 2s infinite alternate ease-in-out;\n      }\n\n      \n      @keyframes hunch-walk {\n        0% { transform: translate(-2px, 1px) rotate(2deg); }\n        100% { transform: translate(3px, 1px) rotate(2deg); }\n      }\n      @keyframes shadow-shift {\n        0% { transform: translateX(-2px) scale(0.9); opacity: 0.4; }\n        100% { transform: translateX(3px) scale(0.9); opacity: 0.4; }\n      }\n\n      \n      @keyframes sneak-1 {\n        0%, 100% { transform: rotate(0deg) scaleY(1); }\n        50% { transform: rotate(-25deg) scaleY(0.7); }\n      }\n      @keyframes sneak-2 {\n        0%, 100% { transform: rotate(-25deg) scaleY(0.7); }\n        50% { transform: rotate(0deg) scaleY(1); }\n      }\n\n      \n      .eyes-crabwalk {\n        transform-origin: 7.5px 9px;\n        animation: crab-eyes 5s infinite ease-in-out;\n      }\n      @keyframes crab-eyes {\n        0%, 55%  { transform: translateX(2px) scaleY(1); }\n        62%      { transform: translateX(0) scaleY(1); }\n        66%      { transform: translateX(0) scaleY(0.1); }\n        70%      { transform: translateX(0) scaleY(1); }\n        75%      { transform: translateX(0) scaleY(0.1); }\n        80%, 85% { transform: translateX(0) scaleY(1); }\n        92%, 100% { transform: translateX(2px) scaleY(1); }\n      }\n    </style>\n  </defs>\n\n  <rect id=\"ground-shadow\" class=\"shadow-sneak\" x=\"3\" y=\"15\" width=\"9\" height=\"1\" fill=\"#000000\" opacity=\"0.5\"/>\n\n  <g class=\"body-hunch\">\n    <g id=\"legs\" fill=\"#DE886D\">\n      <rect id=\"outer-left-leg\" class=\"leg-1\" x=\"3\" y=\"13\" width=\"1\" height=\"2\"/>\n      <rect id=\"inner-left-leg\" class=\"leg-2\" x=\"5\" y=\"13\" width=\"1\" height=\"2\"/>\n      <rect id=\"inner-right-leg\" class=\"leg-1\" x=\"9\" y=\"13\" width=\"1\" height=\"2\"/>\n      <rect id=\"outer-right-leg\" class=\"leg-2\" x=\"11\" y=\"13\" width=\"1\" height=\"2\"/>\n    </g>\n\n    <g id=\"body-color-group\" fill=\"#DE886D\">\n      <rect id=\"torso\" x=\"2\" y=\"6\" width=\"11\" height=\"7\"/>\n      \n      <rect id=\"left-arm\" x=\"0\" y=\"9\" width=\"2\" height=\"2\"/>\n      \n      <rect id=\"right-arm\" x=\"13\" y=\"9\" width=\"2\" height=\"2\"/>\n    </g>\n\n    \n    <g class=\"eyes-crabwalk\" fill=\"#000000\">\n      <rect x=\"4\" y=\"8\" width=\"1\" height=\"2\"/>\n      <rect x=\"10\" y=\"8\" width=\"1\" height=\"2\"/>\n    </g>\n  </g>\n</svg>", "typing": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-15 -25 45 45\" width=\"500\" height=\"500\">\n  <defs>\n    <style>\n      \n      .body-bounce {\n        transform-origin: 7.5px 15px;\n        animation: body-bounce 0.35s infinite ease-in-out;\n      }\n      .breathe {\n        transform-origin: 7.5px 13px;\n        animation: breathe 3.2s infinite ease-in-out;\n      }\n\n      \n      .arm-l-type {\n        transform-origin: 2px 10px;\n        animation: type-l 0.15s infinite ease-in-out;\n      }\n      .arm-r-type {\n        transform-origin: 13px 10px;\n        animation: type-r 0.12s infinite ease-in-out;\n      }\n\n      \n      .eyes-code {\n        transform-origin: 7.5px 9px;\n        animation: eye-code 10s infinite ease-in-out;\n      }\n\n      \n      .code-line {\n        transform-box: fill-box;\n        transform-origin: left center;\n      }\n      .cl1 { animation: cl1 6s infinite; }\n      .cl2 { animation: cl2 6s infinite; }\n      .cl3 { animation: cl3 6s infinite; }\n      .cl4 { animation: cl4 6s infinite; }\n\n      \n      .key-flash { opacity: 0; }\n      .kf1 { animation: kflash 0.6s infinite; }\n      .kf2 { animation: kflash 0.8s infinite; animation-delay: -0.25s; }\n      .kf3 { animation: kflash 0.5s infinite; animation-delay: -0.1s; }\n      .kf4 { animation: kflash 0.7s infinite; animation-delay: -0.45s; }\n      .kf5 { animation: kflash 0.55s infinite; animation-delay: -0.3s; }\n      .kf6 { animation: kflash 0.9s infinite; animation-delay: -0.5s; }\n\n      \n      .data-bit { opacity: 0; animation: float-data 1.5s infinite linear; }\n      .d1 { animation-delay: 0s; }\n      .d2 { animation-delay: -0.4s; }\n      .d3 { animation-delay: -0.8s; }\n      .d4 { animation-delay: -1.2s; }\n\n      \n      .shadow-anim {\n        transform-origin: 7.5px 15.5px;\n        animation: shadow-bob 0.4s infinite ease-in-out;\n      }\n\n      \n\n      @keyframes body-bounce {\n        0%, 100% { transform: translateY(0); }\n        50% { transform: translateY(0.8px); }\n      }\n      @keyframes breathe {\n        0%, 100% { transform: scale(1, 1) translate(0, 0); }\n        50% { transform: scale(1.02, 0.98) translate(0, 0.5px); }\n      }\n      @keyframes shadow-bob {\n        0%, 100% { transform: scaleX(1.02); opacity: 0.5; }\n        50% { transform: scaleX(1.05); opacity: 0.55; }\n      }\n\n      @keyframes type-l {\n        0%   { transform: rotate(-5deg); }\n        25%  { transform: rotate(-38deg); }\n        50%  { transform: rotate(-10deg); }\n        75%  { transform: rotate(-30deg); }\n        100% { transform: rotate(-5deg); }\n      }\n      @keyframes type-r {\n        0%   { transform: rotate(5deg); }\n        25%  { transform: rotate(38deg); }\n        50%  { transform: rotate(10deg); }\n        75%  { transform: rotate(30deg); }\n        100% { transform: rotate(5deg); }\n      }\n\n      \n      @keyframes eye-code {\n        0%   { transform: translate(0, 1px) scaleY(0.6); }\n        14%  { transform: translate(0, 1px) scaleY(0.6); }\n        15%  { transform: translate(0, 1px) scaleY(0.1); }\n        16%  { transform: translate(0, 1px) scaleY(0.6); }\n        36%  { transform: translate(0, 1px) scaleY(0.6); }\n        37%  { transform: translate(0, 1px) scaleY(0.1); }\n        38%  { transform: translate(0, 1px) scaleY(0.6); }\n        54%  { transform: translate(0, 1px) scaleY(0.6); }\n        55%  { transform: translate(0, 1px) scaleY(0.1); }\n        57%  { transform: translate(-1px, -0.5px) scaleY(1); }\n        62%  { transform: translate(1.5px, -0.5px) scaleY(1); }\n        64%  { transform: translate(-0.5px, -0.3px) scaleY(1); }\n        69%  { transform: translate(1.5px, -0.5px) scaleY(1); }\n        71%  { transform: translate(1px, -0.3px) scaleY(0.1); }\n        73%  { transform: translate(0, 1px) scaleY(0.6); }\n        89%  { transform: translate(0, 1px) scaleY(0.6); }\n        90%  { transform: translate(0, 1px) scaleY(0.1); }\n        91%  { transform: translate(0, 1px) scaleY(0.6); }\n        100% { transform: translate(0, 1px) scaleY(0.6); }\n      }\n\n      \n      @keyframes cl1 {\n        0%        { transform: scaleX(0); opacity: 0; }\n        3%        { transform: scaleX(0); opacity: 1; }\n        13%       { transform: scaleX(1); opacity: 1; }\n        13%, 78%  { transform: scaleX(1) translateY(0); opacity: 1; }\n        88%       { transform: scaleX(1) translateY(-3px); opacity: 0; }\n        89%, 100% { transform: scaleX(0) translateY(0); opacity: 0; }\n      }\n      @keyframes cl2 {\n        0%, 14%   { transform: scaleX(0); opacity: 0; }\n        15%       { transform: scaleX(0); opacity: 1; }\n        27%       { transform: scaleX(1); opacity: 1; }\n        27%, 82%  { transform: scaleX(1) translateY(0); opacity: 1; }\n        91%       { transform: scaleX(1) translateY(-3px); opacity: 0; }\n        92%, 100% { transform: scaleX(0) translateY(0); opacity: 0; }\n      }\n      @keyframes cl3 {\n        0%, 29%   { transform: scaleX(0); opacity: 0; }\n        30%       { transform: scaleX(0); opacity: 1; }\n        42%       { transform: scaleX(1); opacity: 1; }\n        42%, 85%  { transform: scaleX(1) translateY(0); opacity: 1; }\n        93%       { transform: scaleX(1) translateY(-3px); opacity: 0; }\n        94%, 100% { transform: scaleX(0) translateY(0); opacity: 0; }\n      }\n      @keyframes cl4 {\n        0%, 44%   { transform: scaleX(0); opacity: 0; }\n        45%       { transform: scaleX(0); opacity: 1; }\n        57%       { transform: scaleX(1); opacity: 1; }\n        57%, 88%  { transform: scaleX(1) translateY(0); opacity: 1; }\n        95%       { transform: scaleX(1) translateY(-3px); opacity: 0; }\n        96%, 100% { transform: scaleX(0) translateY(0); opacity: 0; }\n      }\n\n      \n      @keyframes kflash {\n        0%, 70%, 100% { opacity: 0; }\n        35% { opacity: 0.8; }\n      }\n\n      @keyframes float-data {\n        0%   { transform: translateY(0) scale(0.5); opacity: 0; }\n        10%  { opacity: 0.8; }\n        100% { transform: translateY(-17px) scale(1); opacity: 0; }\n      }\n    </style>\n  </defs>\n\n  \n  <rect class=\"shadow-anim\" x=\"3\" y=\"15\" width=\"9\" height=\"1\" fill=\"#000\" opacity=\"0.5\"/>\n\n  \n  <g fill=\"#40C4FF\">\n    <g class=\"data-bit d1\"><g transform=\"translate(3,7)\"><rect x=\"0\" y=\"0\" width=\"1.5\" height=\"1.5\"/></g></g>\n    <g class=\"data-bit d2\"><g transform=\"translate(7,8)\"><rect x=\"0\" y=\"0\" width=\"1.5\" height=\"1.5\"/></g></g>\n    <g class=\"data-bit d3\"><g transform=\"translate(11,7)\"><rect x=\"0\" y=\"0\" width=\"1.5\" height=\"1.5\"/></g></g>\n    <g class=\"data-bit d4\"><g transform=\"translate(5,8)\"><rect x=\"0\" y=\"0\" width=\"1.5\" height=\"1.5\"/></g></g>\n  </g>\n\n  \n  <g id=\"screen\" transform=\"translate(1.25, 0)\">\n    <rect x=\"-0.5\" y=\"-6\" width=\"13.5\" height=\"10.5\" fill=\"#1E1E2E\" rx=\"0.3\"/>\n    <rect x=\"-0.5\" y=\"-6\" width=\"13.5\" height=\"1.2\" fill=\"#2D2D3D\" rx=\"0.3\"/>\n    <rect x=\"0.3\" y=\"-5.6\" width=\"0.5\" height=\"0.4\" fill=\"#FF5F56\"/>\n    <rect x=\"1.2\" y=\"-5.6\" width=\"0.5\" height=\"0.4\" fill=\"#FFBD2E\"/>\n    <rect x=\"2.1\" y=\"-5.6\" width=\"0.5\" height=\"0.4\" fill=\"#27C93F\"/>\n\n    \n    <rect class=\"code-line cl1\" x=\"0.5\" y=\"-3.5\" width=\"5\"   height=\"0.7\" fill=\"#4CAF50\" opacity=\"0.8\"/>\n    <rect class=\"code-line cl2\" x=\"2\"   y=\"-1.8\" width=\"8\"   height=\"0.7\" fill=\"#4CAF50\" opacity=\"0.8\"/>\n    <rect class=\"code-line cl3\" x=\"2\"   y=\"-0.1\" width=\"4.5\" height=\"0.7\" fill=\"#40C4FF\" opacity=\"0.7\"/>\n    <rect class=\"code-line cl4\" x=\"0.5\" y=\"1.6\"  width=\"2\"   height=\"0.7\" fill=\"#FFC107\" opacity=\"0.7\"/>\n\n  </g>\n\n  \n  <g class=\"body-bounce\">\n    <g id=\"accessory-anchor\" class=\"breathe\">\n      <g fill=\"#DE886D\">\n        <rect x=\"3\" y=\"13\" width=\"1\" height=\"2\"/>\n        <rect x=\"5\" y=\"13\" width=\"1\" height=\"2\"/>\n        <rect x=\"9\" y=\"13\" width=\"1\" height=\"2\"/>\n        <rect x=\"11\" y=\"13\" width=\"1\" height=\"2\"/>\n        <rect x=\"2\" y=\"6\" width=\"11\" height=\"7\"/>\n      </g>\n      <g class=\"eyes-code\" fill=\"#000\">\n        <rect x=\"4\" y=\"8\" width=\"1\" height=\"2\"/>\n        <rect x=\"10\" y=\"8\" width=\"1\" height=\"2\"/>\n      </g>\n    </g>\n  </g>\n\n  \n  <g id=\"keyboard\" transform=\"translate(-0.5, 11.8)\">\n    <rect x=\"0\" y=\"0\" width=\"16\" height=\"3.2\" fill=\"#455A64\" rx=\"0.3\"/>\n    <g fill=\"#78909C\">\n      <rect x=\"0.5\" y=\"0.4\" width=\"1\" height=\"0.7\"/>\n      <rect x=\"1.8\" y=\"0.4\" width=\"1\" height=\"0.7\"/>\n      <rect x=\"3.5\" y=\"0.4\" width=\"6\" height=\"0.7\" rx=\"0.2\"/>\n      <rect x=\"10.2\" y=\"0.4\" width=\"1\" height=\"0.7\"/>\n      <rect x=\"11.5\" y=\"0.4\" width=\"1\" height=\"0.7\"/>\n      <rect x=\"12.8\" y=\"0.4\" width=\"1\" height=\"0.7\"/>\n      <rect x=\"14.1\" y=\"0.4\" width=\"1.3\" height=\"0.7\"/>\n    </g>\n    <g fill=\"#78909C\">\n      <rect x=\"0.8\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"2.0\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"3.2\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"4.4\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"5.6\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"6.8\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"8.0\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"9.2\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"10.4\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"11.6\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"12.8\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"14.0\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n    </g>\n    <g fill=\"#78909C\">\n      <rect x=\"0.5\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"1.7\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"2.9\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"4.1\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"5.3\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"6.5\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"7.7\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"8.9\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"10.1\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"11.3\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"12.5\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"13.7\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect x=\"14.9\" y=\"2.2\" width=\"0.6\" height=\"0.7\"/>\n    </g>\n    \n    <g fill=\"#B0BEC5\">\n      <rect class=\"key-flash kf1\" x=\"4.4\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect class=\"key-flash kf2\" x=\"9.2\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect class=\"key-flash kf3\" x=\"2.9\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect class=\"key-flash kf4\" x=\"7.7\" y=\"2.2\" width=\"0.9\" height=\"0.7\"/>\n      <rect class=\"key-flash kf5\" x=\"11.6\" y=\"1.3\" width=\"0.9\" height=\"0.7\"/>\n      <rect class=\"key-flash kf6\" x=\"3.5\" y=\"0.4\" width=\"6\" height=\"0.7\" rx=\"0.2\"/>\n    </g>\n  </g>\n\n  \n  <g class=\"body-bounce\">\n    <g class=\"breathe\">\n      <g fill=\"#DE886D\">\n        <g class=\"arm-l-type\"><rect x=\"0\" y=\"9\" width=\"2\" height=\"2\"/></g>\n        <g class=\"arm-r-type\"><rect x=\"13\" y=\"9\" width=\"2\" height=\"2\"/></g>\n      </g>\n    </g>\n  </g>\n</svg>", "sleeping": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-15 -25 45 45\" width=\"500\" height=\"500\">\n  <defs>\n    <style>\n      \n      .breathe {\n        transform-origin: 7.5px 15px; \n        animation: breathe-squash 4.5s infinite ease-in-out;\n      }\n\n      \n      .shadow-breathe {\n        transform-origin: 7.5px 15.5px;\n        animation: shadow-pulse 4.5s infinite ease-in-out;\n      }\n\n      \n      .z-particle {\n        opacity: 0;\n      }\n      .z1 { animation: float-1 6s infinite ease-in-out; animation-delay: 0s; }\n      .z2 { animation: float-2 6s infinite ease-in-out; animation-delay: 2s; }\n      .z3 { animation: float-3 6s infinite ease-in-out; animation-delay: 4s; }\n\n      \n      @keyframes breathe-squash {\n        0%, 80%, 100% { transform: scale(1, 1); }\n        30%, 40% { transform: scale(1.02, 1.25); } \n      }\n\n      @keyframes shadow-pulse {\n        0%, 80%, 100% { transform: scaleX(1); opacity: 0.4; }\n        30%, 40% { transform: scaleX(1.05); opacity: 0.5; }\n      }\n\n      \n      @keyframes float-1 {\n        0%   { transform: translate(5px, 8px) scale(0.4); opacity: 0; }\n        10%  { opacity: 1; }\n        30%  { transform: translate(9px, 4px) scale(0.6); }\n        50%  { transform: translate(4px, 0px) scale(0.8); }\n        70%  { transform: translate(8px, -4px) scale(1.0); }\n        90%  { opacity: 0.8; }\n        100% { transform: translate(6px, -8px) scale(1.1); opacity: 0; }\n      }\n\n      @keyframes float-2 {\n        0%   { transform: translate(8px, 9px) scale(0.3); opacity: 0; }\n        10%  { opacity: 1; }\n        30%  { transform: translate(5px, 5px) scale(0.5); }\n        50%  { transform: translate(9px, 1px) scale(0.7); }\n        70%  { transform: translate(6px, -3px) scale(0.9); }\n        90%  { opacity: 0.8; }\n        100% { transform: translate(8px, -7px) scale(1.0); opacity: 0; }\n      }\n\n      @keyframes float-3 {\n        0%   { transform: translate(6px, 7px) scale(0.5); opacity: 0; }\n        10%  { opacity: 1; }\n        30%  { transform: translate(9px, 3px) scale(0.7); }\n        50%  { transform: translate(4px, -1px) scale(0.9); }\n        70%  { transform: translate(8px, -5px) scale(1.1); }\n        90%  { opacity: 0.8; }\n        100% { transform: translate(5px, -9px) scale(1.2); opacity: 0; }\n      }\n    </style>\n\n    \n    <g id=\"pixel-z\">\n      <rect x=\"0\" y=\"0\" width=\"4\" height=\"1\" />\n      <rect x=\"2\" y=\"1\" width=\"1\" height=\"1\" />\n      <rect x=\"1\" y=\"2\" width=\"1\" height=\"1\" />\n      <rect x=\"0\" y=\"3\" width=\"4\" height=\"1\" />\n    </g>\n    \n    <g id=\"pixel-z-small\">\n      <rect x=\"0\" y=\"0\" width=\"3\" height=\"1\" />\n      <rect x=\"1\" y=\"1\" width=\"1\" height=\"1\" />\n      <rect x=\"0\" y=\"2\" width=\"3\" height=\"1\" />\n    </g>\n  </defs>\n\n  \n  <rect id=\"ground-shadow\" class=\"shadow-breathe\" x=\"-1\" y=\"15\" width=\"17\" height=\"1\" fill=\"#000000\" />\n\n  \n  <g class=\"zzz-particles\">\n    <use href=\"#pixel-z\" class=\"z-particle z1\" fill=\"#90A4AE\" />\n    <use href=\"#pixel-z-small\" class=\"z-particle z2\" fill=\"#B0BEC5\" />\n    <use href=\"#pixel-z\" class=\"z-particle z3\" fill=\"#CFD8DC\" />\n  </g>\n\n  \n  <g class=\"breathe\">\n    \n    <g fill=\"#DE886D\">\n      <rect id=\"outer-left-leg-up\" x=\"3\" y=\"9\" width=\"1\" height=\"1\"/>\n      <rect id=\"inner-left-leg-up\" x=\"5\" y=\"9\" width=\"1\" height=\"1\"/>\n      <rect id=\"inner-right-leg-up\" x=\"9\" y=\"9\" width=\"1\" height=\"1\"/>\n      <rect id=\"outer-right-leg-up\" x=\"11\" y=\"9\" width=\"1\" height=\"1\"/>\n    </g>\n\n    \n    <g fill=\"#DE886D\">\n      \n      <rect id=\"torso-sploot\" x=\"1\" y=\"10\" width=\"13\" height=\"5\"/>\n      \n      \n      <rect id=\"left-arm-sploot\" x=\"-1\" y=\"13\" width=\"2\" height=\"2\"/>\n      <rect id=\"right-arm-sploot\" x=\"14\" y=\"13\" width=\"2\" height=\"2\"/>\n    </g>\n    \n    \n    <g fill=\"#000000\">\n      <rect id=\"left-eye-shut\" x=\"3.5\" y=\"12.5\" width=\"2\" height=\"0.4\"/>\n      <rect id=\"right-eye-shut\" x=\"9.5\" y=\"12.5\" width=\"2\" height=\"0.4\"/>\n    </g>\n  </g>\n</svg>", "happy": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-15 -25 45 45\" width=\"500\" height=\"500\">\n  <defs>\n    <style>\n      \n      .bounce-anim {\n        transform-box: fill-box;\n        transform-origin: 50% 100%; \n        animation: bounce 1s infinite ease-in-out;\n      }\n      \n      \n      .shadow-anim {\n        transform-box: fill-box;\n        transform-origin: 50% 50%;\n        animation: shadow 1s infinite ease-in-out;\n      }\n\n      \n      .arm-l {\n        transform-box: fill-box;\n        transform-origin: 100% 50%; \n        animation: wave-l 0.15s infinite alternate ease-in-out;\n      }\n      .arm-r {\n        transform-box: fill-box;\n        transform-origin: 0% 50%; \n        animation: wave-r 0.15s infinite alternate ease-in-out;\n      }\n\n      \n      .eyes-blink {\n        transform-box: fill-box;\n        transform-origin: 50% 50%;\n        animation: blink 2s infinite linear;\n      }\n\n      \n      .spark-center {\n        opacity: 0;\n        animation: flash-center 1.5s infinite step-end;\n        animation-delay: var(--delay, 0s);\n      }\n      \n      .spark-outer {\n        opacity: 0;\n        animation: flash-outer 1.5s infinite step-end;\n        animation-delay: var(--delay, 0s);\n      }\n\n      \n      @keyframes bounce {\n        0%, 15%, 100% { transform: translateY(0) scaleY(1); }\n        20% { transform: translateY(0) scaleY(0.85); }     \n        40% { transform: translateY(-10px) scaleY(1.05); } \n        50% { transform: translateY(-12px) scaleY(1); }    \n        60% { transform: translateY(-10px) scaleY(1.05); } \n        80% { transform: translateY(0) scaleY(0.85); }     \n        85% { transform: translateY(0) scaleY(1); }        \n      }\n\n      @keyframes shadow {\n        0%, 15%, 100% { transform: scale(1); opacity: 0.5; }\n        20% { transform: scale(1.1); opacity: 0.6; }\n        40% { transform: scale(0.6); opacity: 0.2; }\n        50% { transform: scale(0.5); opacity: 0.15; }\n        60% { transform: scale(0.6); opacity: 0.2; }\n        80% { transform: scale(1.1); opacity: 0.6; }\n        85% { transform: scale(1); opacity: 0.5; }\n      }\n\n      @keyframes wave-l {\n        0% { transform: rotate(45deg); }\n        100% { transform: rotate(85deg); }\n      }\n\n      @keyframes wave-r {\n        0% { transform: rotate(-45deg); }\n        100% { transform: rotate(-85deg); }\n      }\n\n      @keyframes blink {\n        0%, 46%, 54%, 100% { transform: scaleY(1); }\n        50% { transform: scaleY(0.1); }\n      }\n\n      \n      @keyframes flash-center {\n        0%  { opacity: 0; }\n        10% { opacity: 1; }  \n        30% { opacity: 0; }  \n        100%{ opacity: 0; }\n      }\n      \n      @keyframes flash-outer {\n        0%  { opacity: 0; }\n        20% { opacity: 1; }  \n        40% { opacity: 0; }  \n        100%{ opacity: 0; }\n      }\n    </style>\n\n    \n    <g id=\"px-sparkle\">\n      \n      <rect class=\"spark-center\" x=\"-0.5\" y=\"-0.5\" width=\"1\" height=\"1\" />\n      \n      <path class=\"spark-outer\" d=\"M -0.5,-1.5 h1 v1 h-1 z \n                                   M -0.5,0.5 h1 v1 h-1 z \n                                   M -1.5,-0.5 h1 v1 h-1 z \n                                   M 0.5,-0.5 h1 v1 h-1 z\" />\n    </g>\n  </defs>\n\n  \n  <rect id=\"ground-shadow\" class=\"shadow-anim\" x=\"3\" y=\"15\" width=\"9\" height=\"1\" fill=\"#000000\"/>\n\n  \n  <g class=\"sparkles\">\n    <use href=\"#px-sparkle\" x=\"-4\" y=\"-2\" fill=\"#FFD700\" style=\"--delay: 0.0s\"/>\n    <use href=\"#px-sparkle\" x=\"18\" y=\"-4\" fill=\"#FFA000\" style=\"--delay: 0.3s\"/>\n    <use href=\"#px-sparkle\" x=\"20\" y=\"10\" fill=\"#FFF59D\" style=\"--delay: 0.6s\"/>\n    <use href=\"#px-sparkle\" x=\"-6\" y=\"12\" fill=\"#FFC107\" style=\"--delay: 0.9s\"/>\n    <use href=\"#px-sparkle\" x=\"7\" y=\"-8\" fill=\"#FFF59D\" style=\"--delay: 1.2s\"/>\n    <use href=\"#px-sparkle\" x=\"-2\" y=\"6\" fill=\"#FFD700\" style=\"--delay: 0.7s\"/>\n  </g>\n\n  \n  <g class=\"bounce-anim\">\n    \n    <g id=\"body-color-group\" fill=\"#DE886D\">\n      \n      <rect id=\"outer-left-leg\" x=\"3\" y=\"13\" width=\"1\" height=\"2\"/>\n      <rect id=\"inner-left-leg\" x=\"5\" y=\"13\" width=\"1\" height=\"2\"/>\n      <rect id=\"inner-right-leg\" x=\"9\" y=\"13\" width=\"1\" height=\"2\"/>\n      <rect id=\"outer-right-leg\" x=\"11\" y=\"13\" width=\"1\" height=\"2\"/>\n\n      \n      <rect id=\"torso\" x=\"2\" y=\"6\" width=\"11\" height=\"7\"/>\n      \n      \n      <g class=\"arm-l\">\n        <rect id=\"left-arm\" x=\"0\" y=\"9\" width=\"2\" height=\"2\"/>\n      </g>\n      <g class=\"arm-r\">\n        <rect id=\"right-arm\" x=\"13\" y=\"9\" width=\"2\" height=\"2\"/>\n      </g>\n    </g>\n    \n    \n    <g class=\"eyes-blink\" fill=\"#000000\">\n      <rect id=\"left-eye\" x=\"4\" y=\"8\" width=\"1\" height=\"2\"/>\n      <rect id=\"right-eye\" x=\"10\" y=\"8\" width=\"1\" height=\"2\"/>\n    </g>\n  </g>\n</svg>", "shy": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-15 -25 45 45\" width=\"500\" height=\"500\">\n  \n  <defs>\n    <style>\n      .ground-shadow {\n        transform-origin: 7.5px 15.5px;\n        animation: ground-shadow 3.2s infinite ease-in-out;\n      }\n\n      .body-bashful {\n        transform-origin: 7.5px 13px;\n        animation: body-bashful 3.2s infinite ease-in-out;\n      }\n\n      .left-arm-shy {\n        animation: left-arm-shy 3.2s infinite ease-in-out;\n      }\n\n      .right-arm-shy {\n        animation: right-arm-shy 3.2s infinite ease-in-out;\n      }\n\n      .arm-shadow-fade {\n        animation: arm-shadow-fade 3.2s infinite ease-in-out;\n      }\n\n      .eye-block {\n        animation: eye-block-fade 3.2s infinite ease-in-out;\n      }\n\n      .eye-block-part {\n        transform-box: fill-box;\n        transform-origin: 50% 50%;\n        animation: eye-block-squash 3.2s infinite ease-in-out;\n      }\n\n      .eye-line {\n        animation: eye-line-fade 3.2s infinite ease-in-out;\n      }\n\n      .eye-smile {\n        animation: eye-smile-fade 3.2s infinite ease-in-out;\n      }\n\n      .eye-smile-shape {\n        transform-box: fill-box;\n        transform-origin: 50% 100%;\n        animation: eye-smile-pop 3.2s infinite ease-in-out;\n      }\n\n      .heart {\n        animation-duration: 3.2s;\n        animation-iteration-count: infinite;\n        animation-timing-function: ease-out;\n        opacity: 0;\n      }\n\n      .heart-main {\n        animation-name: heart-main;\n      }\n\n      .heart-small {\n        animation-name: heart-small;\n      }\n\n      .heart-mid {\n        animation-name: heart-mid;\n      }\n\n      .heart-tiny {\n        animation-name: heart-tiny;\n      }\n\n      @keyframes ground-shadow {\n        0%, 12%, 100% { transform: scaleX(1); opacity: 0.5; }\n        22% { transform: scaleX(1.08); opacity: 0.58; }\n        52% { transform: scaleX(1.05); opacity: 0.55; }\n        82% { transform: scaleX(1); opacity: 0.5; }\n      }\n\n      @keyframes body-bashful {\n        0%, 12%, 100% { transform: translate(0px, 0px) scale(1, 1) rotate(0deg); }\n        22% { transform: translate(0px, 0.8px) scale(1.03, 0.96) rotate(-2.2deg); }\n        34% { transform: translate(0px, 0.45px) scale(1.01, 0.98) rotate(-0.8deg); }\n        52% { transform: translate(0px, 0.55px) scale(1.01, 0.98) rotate(0.9deg); }\n        66% { transform: translate(0px, 0.3px) scale(1, 0.99) rotate(0.3deg); }\n        82% { transform: translate(0px, 0px) scale(1, 1) rotate(0deg); }\n      }\n\n      @keyframes left-arm-shy {\n        0%, 12%, 100% { transform: translate(0px, 0px); }\n        22% { transform: translate(5.4px, -0.2px); }\n        30%, 64% { transform: translate(5px, 0px); }\n        74% { transform: translate(5.1px, 0.1px); }\n        84% { transform: translate(0px, 0px); }\n      }\n\n      @keyframes right-arm-shy {\n        0%, 14%, 100% { transform: translate(0px, 0px); }\n        24% { transform: translate(-5.1px, 0px); }\n        32%, 64% { transform: translate(-4.8px, 0px); }\n        74% { transform: translate(-4.9px, 0.1px); }\n        84% { transform: translate(0px, 0px); }\n      }\n\n      @keyframes arm-shadow-fade {\n        0%, 14%, 100% { opacity: 0; }\n        22%, 68% { opacity: 1; }\n        84% { opacity: 0; }\n      }\n\n      @keyframes eye-block-fade {\n        0%, 16%, 19% { opacity: 1; }\n        22%, 78% { opacity: 0; }\n        82%, 100% { opacity: 1; }\n      }\n\n      @keyframes eye-block-squash {\n        0%, 16%, 100% { transform: scaleY(1); }\n        18% { transform: scaleY(0.42); }\n        20%, 22%, 78%, 80% { transform: scaleY(0.12); }\n        84% { transform: scaleY(1); }\n      }\n\n      @keyframes eye-line-fade {\n        0%, 18%, 79%, 100% { opacity: 0; }\n        20%, 21%, 76%, 78% { opacity: 1; }\n        23%, 74% { opacity: 0; }\n      }\n\n      @keyframes eye-smile-fade {\n        0%, 21%, 74%, 100% { opacity: 0; }\n        24%, 72% { opacity: 1; }\n      }\n\n      @keyframes eye-smile-pop {\n        0%, 21%, 74%, 100% { transform: scaleY(0.15); }\n        24%, 72% { transform: scaleY(1); }\n        78% { transform: scaleY(0.15); }\n      }\n\n      @keyframes heart-main {\n        0%, 22% { transform: translate(7.4px, 3.8px) scale(0.6); opacity: 0; }\n        30% { transform: translate(7.2px, 1.7px) scale(1); opacity: 1; }\n        46% { transform: translate(6.9px, -1.2px) scale(0.98); opacity: 1; }\n        62% { transform: translate(6.5px, -4.2px) scale(0.92); opacity: 0.95; }\n        76%, 100% { transform: translate(6.1px, -7.2px) scale(0.84); opacity: 0; }\n      }\n\n      @keyframes heart-mid {\n        0%, 32% { transform: translate(8.8px, 4.1px) scale(0.48); opacity: 0; }\n        40% { transform: translate(9px, 2.5px) scale(0.82); opacity: 0.92; }\n        56% { transform: translate(9.4px, -0.2px) scale(0.79); opacity: 0.92; }\n        70% { transform: translate(9.9px, -3px) scale(0.72); opacity: 0.82; }\n        82%, 100% { transform: translate(10.4px, -5.7px) scale(0.64); opacity: 0; }\n      }\n\n      @keyframes heart-small {\n        0%, 44% { transform: translate(10.4px, 4.3px) scale(0.45); opacity: 0; }\n        52% { transform: translate(10.8px, 3px) scale(0.8); opacity: 0.88; }\n        66% { transform: translate(11.3px, 0.7px) scale(0.76); opacity: 0.88; }\n        80% { transform: translate(11.9px, -2px) scale(0.68); opacity: 0.78; }\n        90%, 100% { transform: translate(12.3px, -4.6px) scale(0.6); opacity: 0; }\n      }\n\n      @keyframes heart-tiny {\n        0%, 56% { transform: translate(6.2px, 4.5px) scale(0.38); opacity: 0; }\n        64% { transform: translate(5.7px, 3px) scale(0.68); opacity: 0.8; }\n        76% { transform: translate(5.2px, 0.9px) scale(0.64); opacity: 0.78; }\n        88% { transform: translate(4.8px, -1.6px) scale(0.58); opacity: 0.68; }\n        96%, 100% { transform: translate(4.3px, -3.8px) scale(0.5); opacity: 0; }\n      }\n    </style>\n\n    <clipPath id=\"inside-torso\">\n      <rect x=\"2\" y=\"6\" width=\"11\" height=\"7\"/>\n    </clipPath>\n  </defs>\n\n  <rect class=\"ground-shadow\" x=\"3\" y=\"15\" width=\"9\" height=\"1\" fill=\"#000000\"/>\n\n  \n  <g fill=\"#DE886D\">\n    <rect x=\"3\" y=\"13\" width=\"1\" height=\"2\"/>\n    <rect x=\"5\" y=\"13\" width=\"1\" height=\"2\"/>\n    <rect x=\"9\" y=\"13\" width=\"1\" height=\"2\"/>\n    <rect x=\"11\" y=\"13\" width=\"1\" height=\"2\"/>\n  </g>\n\n  <g id=\"accessory-anchor\" class=\"body-bashful\">\n    <rect x=\"2\" y=\"6\" width=\"11\" height=\"7\" fill=\"#DE886D\"/>\n\n    <g clip-path=\"url(#inside-torso)\" class=\"arm-shadow-fade\">\n      <g class=\"left-arm-shy\">\n        <rect x=\"-0.4\" y=\"9\" width=\"2.4\" height=\"2.4\" fill=\"#A85A3A\"/>\n      </g>\n    </g>\n\n    <g clip-path=\"url(#inside-torso)\" class=\"arm-shadow-fade\">\n      <g class=\"right-arm-shy\">\n        <rect x=\"12.6\" y=\"9\" width=\"2.4\" height=\"2.4\" fill=\"#A85A3A\"/>\n      </g>\n    </g>\n\n    \n    <g class=\"eye-block\" fill=\"#000000\">\n      <rect class=\"eye-block-part\" x=\"4\" y=\"8\" width=\"1\" height=\"2\"/>\n      <rect class=\"eye-block-part\" x=\"10\" y=\"8\" width=\"1\" height=\"2\"/>\n    </g>\n\n    <g class=\"eye-line\" fill=\"#000000\">\n      <rect x=\"3.6\" y=\"8.8\" width=\"1.8\" height=\"0.5\"/>\n      <rect x=\"9.6\" y=\"8.8\" width=\"1.8\" height=\"0.5\"/>\n    </g>\n\n    <g class=\"eye-smile\">\n      <g class=\"eye-smile-shape\" fill=\"none\" stroke=\"#000000\" stroke-width=\"0.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <polyline points=\"3.5,9 4.5,8 5.5,9\"/>\n        <polyline points=\"9.5,9 10.5,8 11.5,9\"/>\n      </g>\n    </g>\n\n    <g class=\"left-arm-shy\">\n      <rect x=\"0\" y=\"9\" width=\"2\" height=\"2\" fill=\"#DE886D\"/>\n    </g>\n\n    <g class=\"right-arm-shy\">\n      <rect x=\"13\" y=\"9\" width=\"2\" height=\"2\" fill=\"#DE886D\"/>\n    </g>\n  </g>\n\n  \n  <g class=\"heart heart-main\" fill=\"#FF2D3D\">\n    <rect x=\"-1.05\" y=\"-1.75\" width=\"0.7\" height=\"0.7\"/>\n    <rect x=\"0.35\" y=\"-1.75\" width=\"0.7\" height=\"0.7\"/>\n    <rect x=\"-1.75\" y=\"-1.05\" width=\"3.5\" height=\"1.4\"/>\n    <rect x=\"-1.05\" y=\"0.35\" width=\"2.1\" height=\"0.7\"/>\n    <rect x=\"-0.35\" y=\"1.05\" width=\"0.7\" height=\"0.7\"/>\n  </g>\n\n  <g class=\"heart heart-mid\" fill=\"#FF5365\">\n    <rect x=\"-1.05\" y=\"-1.75\" width=\"0.7\" height=\"0.7\"/>\n    <rect x=\"0.35\" y=\"-1.75\" width=\"0.7\" height=\"0.7\"/>\n    <rect x=\"-1.75\" y=\"-1.05\" width=\"3.5\" height=\"1.4\"/>\n    <rect x=\"-1.05\" y=\"0.35\" width=\"2.1\" height=\"0.7\"/>\n    <rect x=\"-0.35\" y=\"1.05\" width=\"0.7\" height=\"0.7\"/>\n  </g>\n\n  <g class=\"heart heart-small\" fill=\"#FF6B7A\">\n    <rect x=\"-0.63\" y=\"-1.05\" width=\"0.42\" height=\"0.42\"/>\n    <rect x=\"0.21\" y=\"-1.05\" width=\"0.42\" height=\"0.42\"/>\n    <rect x=\"-1.05\" y=\"-0.63\" width=\"2.1\" height=\"0.84\"/>\n    <rect x=\"-0.63\" y=\"0.21\" width=\"1.26\" height=\"0.42\"/>\n    <rect x=\"-0.21\" y=\"0.63\" width=\"0.42\" height=\"0.42\"/>\n  </g>\n\n  <g class=\"heart heart-tiny\" fill=\"#FF97A2\">\n    <rect x=\"-0.63\" y=\"-1.05\" width=\"0.42\" height=\"0.42\"/>\n    <rect x=\"0.21\" y=\"-1.05\" width=\"0.42\" height=\"0.42\"/>\n    <rect x=\"-1.05\" y=\"-0.63\" width=\"2.1\" height=\"0.84\"/>\n    <rect x=\"-0.63\" y=\"0.21\" width=\"1.26\" height=\"0.42\"/>\n    <rect x=\"-0.21\" y=\"0.63\" width=\"0.42\" height=\"0.42\"/>\n  </g>\n</svg>", "carrying": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-15 -25 45 45\" width=\"500\" height=\"500\">\n  <defs>\n    <style>\n      .body-walk {\n        transform-origin: 7.5px 15px;\n        animation: walk-bounce 0.4s infinite ease-in-out;\n      }\n      .step-a { animation: step 0.4s infinite ease-in-out; }\n      .step-b { animation: step 0.4s infinite ease-in-out; animation-delay: -0.2s; }\n      .pack-swing {\n        transform-origin: 13px 8px;\n        animation: pack-swing 0.4s infinite alternate ease-in-out;\n      }\n      .arm-swing-l {\n        transform-origin: 2px 9px;\n        animation: arm-swing 0.4s infinite alternate ease-in-out;\n      }\n      .cap-sway {\n        transform-origin: 6px 6.5px;\n        animation: cap-sway 0.8s infinite alternate ease-in-out;\n      }\n      .shadow-walk {\n        transform-origin: 7.5px 15.5px;\n        animation: shadow-walk 0.4s infinite ease-in-out;\n      }\n\n      \n      .eyes-gaze { animation: eyes-gaze 2.5s infinite; }\n      .eyes-rect {\n        transform-origin: 7.5px 9px;\n        animation: eyes-blink-rush 2.5s infinite, rect-vis 2.5s infinite step-end;\n      }\n      .eyes-xmark {\n        visibility: hidden;\n        animation: xmark-vis 2.5s infinite step-end;\n      }\n\n      \n      .sweat-1 { animation: sweat1-fly 2.5s infinite; }\n      .sweat-2 { animation: sweat2-fly 2.5s infinite; }\n\n      @keyframes walk-bounce {\n        0%, 50%, 100% { transform: translateY(1px); }\n        25%, 75%       { transform: translateY(0); }\n      }\n      @keyframes step {\n        0%, 100% { transform: translateY(0); }\n        50%      { transform: translateY(-1px); }\n      }\n      @keyframes pack-swing {\n        0%   { transform: rotate(3deg); }\n        100% { transform: rotate(-3deg); }\n      }\n      @keyframes arm-swing {\n        0%   { transform: rotate(-8deg); }\n        100% { transform: rotate(8deg); }\n      }\n      @keyframes cap-sway {\n        0%   { transform: rotate(-3deg); }\n        100% { transform: rotate(3deg); }\n      }\n      @keyframes shadow-walk {\n        0%, 50%, 100% { transform: scale(1.03); opacity: 0.55; }\n        25%, 75%       { transform: scale(1); opacity: 0.5; }\n      }\n\n      \n      @keyframes eyes-gaze {\n        0%, 15%, 88%, 100% { transform: translate(-1px, 0); }\n        25%, 80%           { transform: translate(0, 0); }\n      }\n      \n      @keyframes eyes-blink-rush {\n        0%, 4%, 100%  { transform: scaleY(1); }\n        6%            { transform: scaleY(0.1); }\n        8%            { transform: scaleY(1); }\n        28%           { transform: scaleY(0.1); }\n        31%, 76%      { transform: scaleY(1); }\n        78%           { transform: scaleY(0.1); }\n        83%           { transform: scaleY(1); }\n      }\n      \n      @keyframes rect-vis {\n        0%  { visibility: visible; }\n        29% { visibility: hidden; }\n        79% { visibility: visible; }\n      }\n      \n      @keyframes xmark-vis {\n        0%  { visibility: hidden; }\n        29% { visibility: visible; }\n        79% { visibility: hidden; }\n      }\n\n      \n      @keyframes sweat1-fly {\n        0%, 27%  { transform: translate(0, 0); opacity: 0; }\n        31%      { transform: translate(0, 0); opacity: 1; }\n        55%      { transform: translate(4px, -3px); opacity: 0; }\n        100%     { opacity: 0; }\n      }\n      @keyframes sweat2-fly {\n        0%, 37%  { transform: translate(0, 0); opacity: 0; }\n        41%      { transform: translate(0, 0); opacity: 1; }\n        65%      { transform: translate(2px, -5px); opacity: 0; }\n        100%     { opacity: 0; }\n      }\n    </style>\n  </defs>\n\n  <rect class=\"shadow-walk\" x=\"3\" y=\"15\" width=\"9\" height=\"1\" fill=\"#000000\" opacity=\"0.5\"/>\n\n  <g transform=\"rotate(-2, 7.5, 15)\">\n  <g id=\"accessory-anchor\" class=\"body-walk\">\n    \n    <g class=\"pack-swing\">\n      <rect x=\"13\" y=\"7\" width=\"4\" height=\"6\" fill=\"#5C9CE6\"/>\n      <rect x=\"12\" y=\"8\" width=\"5\" height=\"4\" fill=\"#5C9CE6\"/>\n      <rect x=\"13\" y=\"7\" width=\"4\" height=\"2\" fill=\"#3D7AC7\"/>\n      <rect x=\"13\" y=\"10\" width=\"4\" height=\"1\" fill=\"#3D7AC7\"/>\n      <rect x=\"13\" y=\"12\" width=\"4\" height=\"1\" fill=\"#2D5FA5\"/>\n      <rect x=\"15\" y=\"9\" width=\"1\" height=\"1\" fill=\"#FFD54F\"/>\n    </g>\n\n    \n    <g fill=\"#DE886D\">\n      <rect class=\"step-a\" x=\"3\" y=\"13\" width=\"1\" height=\"2\"/>\n      <rect class=\"step-b\" x=\"5\" y=\"13\" width=\"1\" height=\"2\"/>\n      <rect class=\"step-b\" x=\"9\" y=\"13\" width=\"1\" height=\"2\"/>\n      <rect class=\"step-a\" x=\"11\" y=\"13\" width=\"1\" height=\"2\"/>\n    </g>\n\n    \n    <rect x=\"2\" y=\"6\" width=\"11\" height=\"7\" fill=\"#DE886D\"/>\n\n    \n    <g class=\"arm-swing-l\" fill=\"#DE886D\">\n      <rect x=\"0\" y=\"9\" width=\"3\" height=\"2\"/>\n    </g>\n    <rect x=\"13\" y=\"9\" width=\"2\" height=\"2\" fill=\"#DE886D\"/>\n\n    \n    <rect x=\"13\" y=\"7\" width=\"1\" height=\"4\" fill=\"#3D7AC7\"/>\n\n    \n    <g class=\"eyes-gaze\">\n      <g class=\"eyes-rect\" fill=\"#000000\">\n        <rect x=\"4\" y=\"8\" width=\"1\" height=\"2\"/>\n        <rect x=\"10\" y=\"8\" width=\"1\" height=\"2\"/>\n      </g>\n      <g class=\"eyes-xmark\" fill=\"none\" stroke=\"#000000\"\n         stroke-width=\"0.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <polyline points=\"4,8 5.5,9 4,10\"/>\n        <polyline points=\"11,8 9.5,9 11,10\"/>\n      </g>\n    </g>\n\n    \n    <g class=\"sweat-1\" fill=\"#40C4FF\">\n      <rect x=\"14\" y=\"5\" width=\"1\" height=\"1.5\"/>\n      <rect x=\"14.25\" y=\"4.5\" width=\"0.5\" height=\"0.5\"/>\n    </g>\n    <g class=\"sweat-2\" fill=\"#40C4FF\">\n      <rect x=\"16\" y=\"4\" width=\"1\" height=\"1.5\"/>\n      <rect x=\"16.25\" y=\"3.5\" width=\"0.5\" height=\"0.5\"/>\n    </g>\n\n    \n    <g class=\"cap-sway\">\n      <g transform=\"rotate(-15, 6, 6.5)\">\n        <rect x=\"1\" y=\"4.5\" width=\"7\" height=\"2\" fill=\"#5C9CE6\"/>\n        <rect x=\"-1\" y=\"5.5\" width=\"4\" height=\"1\" fill=\"#3D7AC7\"/>\n        <rect x=\"4\" y=\"4.5\" width=\"1\" height=\"1\" fill=\"#FFD54F\"/>\n      </g>\n    </g>\n  </g>\n  </g>\n</svg>", "yawn": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-15 -25 45 45\" width=\"500\" height=\"500\">\n  <defs>\n    <style>\n      \n      .action-body {\n        transform-origin: 7.5px 13px;\n        animation: action-body-yawn 3.8s ease-in-out forwards;\n      }\n\n      .breathe-anim {\n        transform-origin: 7.5px 13px;\n        animation: breathe 3.2s infinite ease-in-out;\n      }\n\n      .shadow-anim {\n        transform-origin: 7.5px 15.5px;\n        animation: shadow-yawn 3.8s ease-in-out forwards;\n      }\n\n      .arm-l {\n        transform-origin: 1px 10px;\n        animation: arm-l-yawn 3.8s ease-in-out forwards;\n      }\n\n      .arm-r {\n        transform-origin: 14px 10px;\n        animation: arm-r-yawn 3.8s ease-in-out forwards;\n      }\n\n      .eyes-look {\n        animation: eye-track-yawn 3.8s ease-in-out forwards;\n      }\n\n      .eyes-blink {\n        transform-origin: 7.5px 9px;\n        animation: eye-blink-yawn 3.8s linear forwards;\n      }\n\n      .yawn-mouth {\n        transform-origin: 7.5px 11px;\n        animation: yawn-mouth-anim 3.8s ease-in-out forwards;\n        opacity: 0;\n      }\n\n      .yawn-tear {\n        animation: tear-fall 3.8s ease-in-out forwards;\n        opacity: 0;\n      }\n\n      \n\n      @keyframes breathe {\n        0%, 100% { transform: scale(1, 1) translate(0, 0); }\n        50% { transform: scale(1.02, 0.98) translate(0, 0.5px); }\n      }\n\n      \n      @keyframes action-body-yawn {\n        0%, 12% { transform: scale(1, 1) translate(0, 0); }\n        32% { transform: scale(0.95, 1.05) translate(0, -1px); }\n        50% { transform: scale(0.9, 1.1) translate(0, -2px); }\n        78%, 100% { transform: scale(1.05, 0.95) translate(0, 1px); }\n      }\n\n      @keyframes shadow-yawn {\n        0%, 12% { transform: scaleX(1); opacity: 0.5; }\n        32% { transform: scaleX(0.95); opacity: 0.45; }\n        50% { transform: scaleX(0.9); opacity: 0.4; }\n        78%, 100% { transform: scaleX(1.05); opacity: 0.55; }\n      }\n\n      \n      @keyframes eye-track-yawn {\n        0%, 18% { transform: translate(0, 0); }\n        32%, 68% { transform: translate(0, -1px); }\n        82%, 100% { transform: translate(0, 0); }\n      }\n\n      \n      @keyframes eye-blink-yawn {\n        0%, 18% { transform: scaleY(1); }\n        24% { transform: scaleY(0.1); }\n        30% { transform: scaleY(1); }\n        42%, 100% { transform: scaleY(0.1); }\n      }\n\n      \n      @keyframes arm-l-yawn {\n        0%, 12% { transform: translate(0, 0) rotate(0deg); }\n        38% { transform: translate(-1px, -2px) rotate(45deg); }\n        50% { transform: translate(-2px, -3px) rotate(80deg); }\n        78%, 100% { transform: translate(0, 1px) rotate(-15deg); }\n      }\n\n      @keyframes arm-r-yawn {\n        0%, 12% { transform: translate(0, 0) rotate(0deg); }\n        38% { transform: translate(1px, -2px) rotate(-45deg); }\n        50% { transform: translate(2px, -3px) rotate(-80deg); }\n        78%, 100% { transform: translate(0, 1px) rotate(15deg); }\n      }\n\n      \n      @keyframes yawn-mouth-anim {\n        0%, 18% { opacity: 0; transform: scale(0.1); }\n        32% { opacity: 1; transform: scale(0.5, 0.2); }\n        50% { opacity: 1; transform: scale(1.1, 1.4); }\n        68% { opacity: 1; transform: scale(0.6, 0.4); }\n        80%, 100% { opacity: 0; transform: scale(0.1); }\n      }\n\n      \n      @keyframes tear-fall {\n        0%, 45% { opacity: 0; transform: translateY(0); }\n        50% { opacity: 1; transform: translateY(0); }\n        68% { opacity: 1; transform: translateY(2.5px); }\n        80%, 100% { opacity: 0; transform: translateY(3px); }\n      }\n    </style>\n  </defs>\n\n  \n  <rect id=\"ground-shadow\" class=\"shadow-anim\" x=\"3\" y=\"15\" width=\"9\" height=\"1\" fill=\"#000000\" opacity=\"0.5\"/>\n\n  \n  <g id=\"legs\" fill=\"#DE886D\">\n    <rect x=\"3\" y=\"12\" width=\"1\" height=\"3\"/>\n    <rect x=\"5\" y=\"12\" width=\"1\" height=\"3\"/>\n    <rect x=\"9\" y=\"12\" width=\"1\" height=\"3\"/>\n    <rect x=\"11\" y=\"12\" width=\"1\" height=\"3\"/>\n  </g>\n\n  \n  <g class=\"action-body\">\n    <g class=\"breathe-anim\">\n      \n      <rect id=\"torso\" x=\"2\" y=\"6\" width=\"11\" height=\"7\" fill=\"#DE886D\"/>\n      \n      <g class=\"arm-l\">\n        <rect x=\"0\" y=\"9\" width=\"2\" height=\"2\" fill=\"#DE886D\"/>\n      </g>\n      \n      <g class=\"arm-r\">\n        <rect x=\"13\" y=\"9\" width=\"2\" height=\"2\" fill=\"#DE886D\"/>\n      </g>\n      \n      <rect class=\"yawn-mouth\" x=\"6\" y=\"10\" width=\"3\" height=\"2\" fill=\"#000000\"/>\n      \n      <g class=\"eyes-look\" fill=\"#000000\">\n        <g class=\"eyes-blink\">\n          <rect x=\"4\" y=\"8\" width=\"1\" height=\"2\"/>\n          <rect x=\"10\" y=\"8\" width=\"1\" height=\"2\"/>\n        </g>\n      </g>\n      \n      <rect class=\"yawn-tear\" x=\"3.5\" y=\"10\" width=\"1\" height=\"1\" fill=\"#40C4FF\"/>\n    </g>\n  </g>\n</svg>", "wake": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-15 -25 45 45\" width=\"500\" height=\"500\" shape-rendering=\"crispEdges\">\n  <defs>\n    <style>\n      .once {\n        animation-duration: 1.5s;\n        animation-fill-mode: forwards;\n        animation-iteration-count: 1;\n      }\n\n      .scale-top-left {\n        transform-box: fill-box;\n        transform-origin: top left;\n      }\n\n      .shadow {\n        transform-origin: 7.5px 15.5px;\n        animation-name: shadow-wake;\n        animation-timing-function: linear;\n      }\n\n      .body-motion {\n        transform-origin: 7.5px 15px;\n        animation-name: body-motion;\n        animation-timing-function: cubic-bezier(0.24, 0.8, 0.24, 1);\n      }\n\n      .torso-shift {\n        animation: torso-shift 1.5s linear forwards;\n      }\n\n      .torso-shape {\n        animation: torso-shape 1.5s linear forwards;\n      }\n\n      .arm-left {\n        animation: arm-left 1.5s linear forwards;\n      }\n\n      .arm-right {\n        animation: arm-right 1.5s linear forwards;\n      }\n\n      .leg-shift {\n        animation: leg-shift 1.5s linear forwards;\n      }\n\n      .leg-grow {\n        animation: leg-grow 1.5s linear forwards;\n      }\n\n      .eye-shift {\n        animation: eye-shift 1.5s linear forwards;\n      }\n\n      .eye-shape {\n        animation: eye-shape 1.5s linear forwards;\n      }\n\n      @keyframes shadow-wake {\n        0% {\n          opacity: 0.4;\n          transform: scaleX(1);\n        }\n        20% {\n          opacity: 0.47;\n          transform: scaleX(0.56);\n        }\n        33.333% {\n          opacity: 0.54;\n          transform: scaleX(0.42);\n        }\n        46.667% {\n          opacity: 0.48;\n          transform: scaleX(0.48);\n        }\n        56% {\n          opacity: 0.52;\n          transform: scaleX(0.56);\n        }\n        66.667%, 100% {\n          opacity: 0.5;\n          transform: scaleX(0.5294);\n        }\n      }\n\n      @keyframes body-motion {\n        0% {\n          transform: translate(0, 0) scale(1, 1) rotate(0deg);\n        }\n        6.667% {\n          transform: translate(0, 0.35px) scale(1.03, 0.96) rotate(0deg);\n        }\n        20% {\n          transform: translate(0, -2.6px) scale(0.98, 1.04) rotate(-6deg);\n        }\n        33.333% {\n          transform: translate(0, -4.1px) scale(0.9, 1.22) rotate(2deg);\n        }\n        46.667% {\n          transform: translate(0, -2px) scale(0.95, 1.11) rotate(0deg);\n        }\n        54% {\n          transform: translate(0, -0.55px) scale(1.02, 0.98) rotate(-4deg);\n        }\n        60% {\n          transform: translate(0, -0.2px) scale(0.99, 1.02) rotate(2.5deg);\n        }\n        66.667%, 100% {\n          transform: translate(0, 0) scale(1, 1) rotate(0deg);\n        }\n      }\n\n      @keyframes torso-shift {\n        0% {\n          transform: translate(-1px, 4px);\n        }\n        8% {\n          transform: translate(-0.82px, 3.4px);\n        }\n        20%, 100% {\n          transform: translate(0, 0);\n        }\n      }\n\n      @keyframes torso-shape {\n        0% {\n          transform: scale(1.1818, 0.7143);\n        }\n        8% {\n          transform: scale(1.14, 0.76);\n        }\n        20%, 100% {\n          transform: scale(1, 1);\n        }\n      }\n\n      @keyframes arm-left {\n        0% {\n          transform: translate(-1px, 4px);\n        }\n        8% {\n          transform: translate(-0.8px, 3.4px);\n        }\n        20%, 100% {\n          transform: translate(0, 0);\n        }\n      }\n\n      @keyframes arm-right {\n        0% {\n          transform: translate(1px, 4px);\n        }\n        8% {\n          transform: translate(0.8px, 3.4px);\n        }\n        20%, 100% {\n          transform: translate(0, 0);\n        }\n      }\n\n      @keyframes leg-shift {\n        0% {\n          transform: translate(0, -2px);\n        }\n        8% {\n          transform: translate(0, -1.5px);\n        }\n        20%, 100% {\n          transform: translate(0, 0);\n        }\n      }\n\n      @keyframes leg-grow {\n        0% {\n          transform: scale(1, 0.25);\n        }\n        8% {\n          transform: scale(1, 0.45);\n        }\n        20%, 100% {\n          transform: scale(1, 1);\n        }\n      }\n\n      @keyframes eye-shift {\n        0% {\n          transform: translate(-0.5px, 4.5px);\n        }\n        6.667% {\n          transform: translate(-0.5px, 4.15px);\n        }\n        10% {\n          transform: translate(-0.2px, 1px);\n        }\n        14% {\n          transform: translate(-0.06px, 0.2px);\n        }\n        20%, 54% {\n          transform: translate(0, 0);\n        }\n        58% {\n          transform: translate(0, 0.5px);\n        }\n        62%, 100% {\n          transform: translate(0, 0);\n        }\n      }\n\n      @keyframes eye-shape {\n        0% {\n          transform: scale(2, 0.2);\n        }\n        6.667% {\n          transform: scale(2.12, 0.12);\n        }\n        10% {\n          transform: scale(1.45, 1.8);\n        }\n        14% {\n          transform: scale(0.92, 1.08);\n        }\n        20%, 54% {\n          transform: scale(1, 1);\n        }\n        58% {\n          transform: scale(1, 0.08);\n        }\n        62% {\n          transform: scale(1, 1.08);\n        }\n        66.667%, 100% {\n          transform: scale(1, 1);\n        }\n      }\n    </style>\n  </defs>\n\n  <rect class=\"once shadow\" x=\"-1\" y=\"15\" width=\"17\" height=\"1\" fill=\"#000000\" opacity=\"0.4\"/>\n\n  <g class=\"once body-motion\">\n    <g fill=\"#DE886D\">\n      <g class=\"once leg-shift\">\n        <rect class=\"once scale-top-left leg-grow\" x=\"3\" y=\"11\" width=\"1\" height=\"4\"/>\n      </g>\n      <g class=\"once leg-shift\">\n        <rect class=\"once scale-top-left leg-grow\" x=\"5\" y=\"11\" width=\"1\" height=\"4\"/>\n      </g>\n      <g class=\"once leg-shift\">\n        <rect class=\"once scale-top-left leg-grow\" x=\"9\" y=\"11\" width=\"1\" height=\"4\"/>\n      </g>\n      <g class=\"once leg-shift\">\n        <rect class=\"once scale-top-left leg-grow\" x=\"11\" y=\"11\" width=\"1\" height=\"4\"/>\n      </g>\n    </g>\n\n    <g id=\"accessory-anchor\" class=\"once torso-shift\">\n      <rect class=\"once scale-top-left torso-shape\" x=\"2\" y=\"6\" width=\"11\" height=\"7\" fill=\"#DE886D\"/>\n    </g>\n\n    <g class=\"once arm-left\">\n      <rect x=\"0\" y=\"9\" width=\"2\" height=\"2\" fill=\"#DE886D\"/>\n    </g>\n\n    <g class=\"once arm-right\">\n      <rect x=\"13\" y=\"9\" width=\"2\" height=\"2\" fill=\"#DE886D\"/>\n    </g>\n\n    <g fill=\"#000000\">\n      <g class=\"once eye-shift\">\n        <rect class=\"once scale-top-left eye-shape\" x=\"4\" y=\"8\" width=\"1\" height=\"2\"/>\n      </g>\n      <g class=\"once eye-shift\">\n        <rect class=\"once scale-top-left eye-shape\" x=\"10\" y=\"8\" width=\"1\" height=\"2\"/>\n      </g>\n    </g>\n  </g>\n</svg>", "heart_eyes": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-15 -25 45 45\" width=\"500\" height=\"500\">\n  <defs>\n    <style>\n      .open-eyes { animation: eyes-open 3s infinite step-end; }\n      .closed-eyes { opacity: 0; animation: eyes-closed 3s infinite step-end; }\n      @keyframes eyes-open {\n        0%, 91%, 100% { opacity: 1; }\n        92%, 97% { opacity: 0; }\n      }\n      @keyframes eyes-closed {\n        0%, 91%, 100% { opacity: 0; }\n        92%, 97% { opacity: 1; }\n      }\n    </style>\n  </defs>\n\n  <rect x=\"3\" y=\"15\" width=\"9\" height=\"1\" fill=\"#000000\" opacity=\"0.45\"/>\n  <g fill=\"#DE886D\">\n    <rect x=\"3\" y=\"13\" width=\"1\" height=\"2\"/>\n    <rect x=\"5\" y=\"13\" width=\"1\" height=\"2\"/>\n    <rect x=\"9\" y=\"13\" width=\"1\" height=\"2\"/>\n    <rect x=\"11\" y=\"13\" width=\"1\" height=\"2\"/>\n    <rect id=\"torso\" x=\"2\" y=\"6\" width=\"11\" height=\"7\"/>\n    <rect x=\"0\" y=\"9\" width=\"2\" height=\"2\"/>\n    <rect x=\"13\" y=\"9\" width=\"2\" height=\"2\"/>\n  </g>\n  <g class=\"open-eyes\" fill=\"#FF365C\">\n    <path transform=\"translate(4.5 0) scale(1.15 1) translate(-4.5 0)\" d=\"M3.5 7h0.75v0.75H3.5zM4.75 7h0.75v0.75h-0.75zM3.5 7.75h2v0.75h-2zM3.875 8.5h1.25v0.75h-1.25zM4.25 9.25h0.5v0.5h-0.5z\"/>\n    <path transform=\"translate(10.5 0) scale(1.15 1) translate(-10.5 0)\" d=\"M9.5 7h0.75v0.75H9.5zM10.75 7h0.75v0.75h-0.75zM9.5 7.75h2v0.75h-2zM9.875 8.5h1.25v0.75h-1.25zM10.25 9.25h0.5v0.5h-0.5z\"/>\n  </g>\n  <g class=\"closed-eyes\" fill=\"#FF365C\">\n    <rect x=\"3.5\" y=\"8.5\" width=\"2\" height=\"0.5\"/>\n    <rect x=\"9.5\" y=\"8.5\" width=\"2\" height=\"0.5\"/>\n  </g>\n</svg>"};

class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'square', duration = 0.08, gainVal = 0.1) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch(e) {}
  }

  petSound() {
    this.playTone(520, 'sine', 0.08, 0.12);
    setTimeout(() => this.playTone(780, 'sine', 0.12, 0.12), 60);
  }

  ballCatch() {
    this.playTone(440, 'triangle', 0.06, 0.15);
    setTimeout(() => this.playTone(880, 'square', 0.1, 0.15), 50);
  }

  codeClick() {
    this.playTone(1200 + Math.random() * 400, 'square', 0.03, 0.04);
  }

  snackEat() {
    this.playTone(330, 'triangle', 0.08, 0.15);
    setTimeout(() => this.playTone(495, 'triangle', 0.08, 0.15), 80);
  }

  sleepSnore() {
    this.playTone(220, 'sine', 0.25, 0.05);
  }

  wakeSound() {
    this.playTone(400, 'triangle', 0.08, 0.1);
    setTimeout(() => this.playTone(800, 'triangle', 0.12, 0.12), 80);
  }
}

const sfx = new SoundFX();

const canvas = document.getElementById('canvasLayer');
const ctx = canvas.getContext('2d');
const FLOOR_Y = 410;

class Ball {
  constructor(x, y, targetX) {
    this.x = x;
    this.y = y;
    const dx = targetX - x;
    this.vx = Math.max(Math.min(dx * 0.042, 7.5), -7.5);
    this.vy = -8.5;
    this.gravity = 0.36;
    this.radius = 13;
    this.active = true;
    this.bounces = 0;
    this.resting = false;
  }

  update() {
    if (!this.active || this.resting) return;
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;

    if (this.y >= FLOOR_Y - this.radius) {
      this.y = FLOOR_Y - this.radius;
      this.vy = -this.vy * 0.65;
      this.vx *= 0.84;
      this.bounces++;
      if (Math.abs(this.vy) < 0.7 && this.bounces >= 3) {
        this.vy = 0;
        this.resting = true;
      }
    }

    if (this.x < 28) { this.x = 28; this.vx = -this.vx * 0.7; }
    if (this.x > 912) { this.x = 912; this.vx = -this.vx * 0.7; }
  }

  draw(ctx) {
    if (!this.active) return;
    ctx.save();
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 0.55, -Math.PI * 0.35, Math.PI * 0.35);
    ctx.stroke();
    ctx.restore();
  }
}

class Particle {
  constructor(x, y, text, color = '#f472b6', vy = -1.5) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.color = color;
    this.vy = vy;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.alpha = 1.0;
    this.life = 70;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
    this.alpha = Math.max(0, this.life / 70);
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.font = 'bold 18px Consolas, monospace';
    ctx.fillText(this.text, this.x, this.y);
    ctx.restore();
  }
}

class SnackItem {
  constructor(x, kind = 'COOKIE') {
    this.x = x;
    this.y = 40;
    this.kind = kind;
    this.active = true;
  }

  update() {
    if (this.y < FLOOR_Y - 14) {
      this.y += 4.5;
    }
  }

  draw(ctx) {
    if (!this.active) return;
    ctx.save();
    ctx.fillStyle = '#facc15';
    ctx.font = 'bold 13px Consolas, monospace';
    ctx.strokeStyle = '#333';
    ctx.strokeRect(this.x - 34, this.y - 14, 68, 24);
    ctx.fillRect(this.x - 34, this.y - 14, 68, 24);
    ctx.fillStyle = '#1e1e24';
    ctx.textAlign = 'center';
    ctx.fillText(`[${this.kind}]`, this.x, this.y + 4);
    ctx.restore();
  }
}

class ClawdPetApp {
  constructor() {
    this.x = 360;
    this.targetX = 360;
    this.homeX = 360;
    this.facing = 1;

    this.state = 'idle';
    this.stateTimer = 0;
    this.animTick = 0;

    this.energy = 85;
    this.happiness = 90;
    this.linesOfCode = 0;
    this.fetchesCount = 0;
    this.snacksEaten = 0;

    this.lastInteraction = Date.now();
    this.idleToCodeDelay = 7000;
    this.codingToSleepDelay = 18000;

    this.ball = null;
    this.snack = null;
    this.particles = [];
    this.hasBall = false;

    this.characterWrapper = document.getElementById('characterWrapper');
    this.svgContainer = document.getElementById('svgContainer');
    this.speechBubble = document.getElementById('speechBubble');

    this.bubbleText = 'Hello! I am Clawd! > <';
    this.bubbleExpiry = Date.now() + 3500;

    this.loadStateSVG('idle');
  }

  loadStateSVG(stateName) {
    let svgContent = CLAW_SVGS[stateName] || CLAW_SVGS['idle'];
    this.svgContainer.innerHTML = svgContent;
  }

  setState(newState, timer = 0) {
    if (this.state === newState) return;
    this.state = newState;
    this.stateTimer = timer;

    let svgKey = 'idle';
    if (newState === 'walk' || newState === 'fetch_chase') svgKey = 'walk';
    else if (newState === 'typing') svgKey = 'typing';
    else if (newState === 'sleeping') svgKey = 'sleeping';
    else if (newState === 'happy') svgKey = 'happy';
    else if (newState === 'shy' || newState === 'petted') svgKey = 'shy';
    else if (newState === 'carrying') svgKey = 'carrying';
    else if (newState === 'yawn') svgKey = 'yawn';
    else if (newState === 'wake') svgKey = 'wake';

    this.loadStateSVG(svgKey);
    document.getElementById('txtState').innerText = newState.toUpperCase();
  }

  touch() {
    this.lastInteraction = Date.now();
    if (this.state === 'sleeping' || this.state === 'yawn') {
      this.setState('wake', 1.5);
      this.speak('Clawd woke up refreshed! > <', 3000);
      sfx.wakeSound();
      logEvent('Clawd woke up from his nap with a big stretch.');
    } else if (this.state === 'typing' && this.stateTimer > 3) {
      this.setState('idle');
      this.speak('Code saved! Ready to play!', 2500);
      logEvent('Clawd saved his code commits and closed his laptop.');
    }
  }

  speak(text, duration = 3000) {
    this.bubbleText = text;
    this.bubbleExpiry = Date.now() + duration;
    this.speechBubble.innerText = text;
    this.speechBubble.style.opacity = '1';
  }

  pet() {
    this.touch();
    this.setState('shy', 2.8);
    this.happiness = Math.min(100, this.happiness + 15);
    this.energy = Math.min(100, this.energy + 5);

    for (let i = 0; i < 5; i++) {
      this.particles.push(new Particle(
        this.x + 70 + Math.random() * 90,
        FLOOR_Y - 140,
        '<3',
        '#f472b6',
        -1.8 - Math.random()
      ));
    }

    const quotes = [
      'Purrrr~ <3 > // <',
      'Best human ever! <3',
      'Claude Code affection 100%!',
      'Clawd wiggles cutely with joy! > <',
      'Headpats are the best! <3'
    ];
    this.speak(quotes[Math.floor(Math.random() * quotes.length)], 3000);
    sfx.petSound();
    logEvent('You petted Clawd! Shy and blushing with pure happiness.');
  }

  throwBall(targetX = 460) {
    this.touch();
    const startX = targetX > 460 ? 80 : 860;
    this.ball = new Ball(startX, 100, targetX);
    this.hasBall = false;
    this.setState('fetch_chase');
    this.speak('A ball! Tracking it! > <', 2000);
    logEvent(`Ball thrown toward X: ${Math.round(targetX)}! Clawd is tracking the ball!`);
  }

  feedSnack() {
    this.touch();
    const kinds = ['COOKIE', 'SHRIMP', 'TACO', 'SEAWEED', 'RAMEN'];
    const chosen = kinds[Math.floor(Math.random() * kinds.length)];
    const dropX = 160 + Math.random() * 620;
    this.snack = new SnackItem(dropX, chosen);
    this.setState('eating', 4.0);
    this.speak(`A snack! Nom nom nom! > <`, 2500);
    logEvent(`Clawd spotted a delicious [${chosen}] falling from above!`);
  }

  startCoding() {
    this.touch();
    this.setState('typing', 0);
    this.speak('Coding time! Cracking tasks...', 2500);
    logEvent('Clawd opened his terminal and began coding.');
  }

  toggleSleep() {
    this.touch();
    if (this.state === 'sleeping') {
      this.setState('wake', 1.5);
      this.speak('Good morning! Ready to play! > <', 2500);
      sfx.wakeSound();
      logEvent('Clawd woke up from sleeping.');
    } else {
      this.setState('yawn', 2.0);
      this.speak('Yawn... so sleepy... zZZ', 2500);
      sfx.sleepSnore();
      logEvent('Clawd is yawning and getting ready for a cozy nap.');
    }
  }

  update(dt) {
    this.animTick++;
    const now = Date.now();
    const idleDuration = now - this.lastInteraction;

    if (this.state === 'idle') {
      if (idleDuration >= this.idleToCodeDelay + this.codingToSleepDelay) {
        this.setState('yawn', 2.0);
        this.speak('Phew... so sleepy... *dozing off*', 3000);
        logEvent('Clawd got tired from waiting and is falling asleep.');
      } else if (idleDuration >= this.idleToCodeDelay) {
        this.setState('typing');
        this.speak('Nothing to do? Let me code!', 3000);
        logEvent('Clawd started coding autonomously.');
      }
    }

    if (this.ball && this.ball.active) this.ball.update();
    if (this.snack && this.snack.active) this.snack.update();

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      if (this.particles[i].life <= 0) {
        this.particles.splice(i, 1);
      }
    }

    if (this.stateTimer > 0) {
      this.stateTimer -= dt;
      if (this.stateTimer <= 0) {
        if (this.state === 'yawn') {
          this.setState('sleeping');
        } else if (this.state === 'wake' || this.state === 'shy' || this.state === 'happy') {
          this.setState('idle');
        }
      }
    }

    if (this.state === 'idle') {
      this.energy = Math.min(100, this.energy + 0.04);
      if (Math.random() < 0.015 && this.animTick % 40 === 0) {
        this.targetX = 140 + Math.random() * 660;
      }
      if (Math.abs(this.x - this.targetX) > 4) {
        this.facing = this.x < this.targetX ? 1 : -1;
        this.x += this.facing * 1.6;
        this.loadStateSVG('walk');
      } else {
        this.loadStateSVG('idle');
      }
    } else if (this.state === 'typing') {
      if (this.animTick % 25 === 0) {
        this.linesOfCode += Math.floor(3 + Math.random() * 7);
        this.energy = Math.max(10, this.energy - 0.2);
        sfx.codeClick();
      }
      if (now - this.lastInteraction >= this.idleToCodeDelay + 16000) {
        this.setState('yawn', 2.0);
        this.speak('Yawn... hard work! Need sleep... zZZ', 3000);
        logEvent('Clawd finished his code commits and is dozing off.');
      }
    } else if (this.state === 'sleeping') {
      this.energy = Math.min(100, this.energy + 0.22);
      if (this.animTick % 70 === 0) {
        this.particles.push(new Particle(
          this.x + 140,
          FLOOR_Y - 140,
          this.animTick % 140 === 0 ? 'z Z Z' : 'z',
          '#38bdf8',
          -1.0
        ));
        sfx.sleepSnore();
      }
    } else if (this.state === 'fetch_chase') {
      if (this.ball && this.ball.active) {
        this.handleLookAt(this.ball.x, this.ball.y);

        const targetX = this.ball.x - 115;
        const dist = targetX - this.x;
        this.facing = dist > 0 ? 1 : -1;

        if (Math.abs(dist) > 12) {
          this.x += this.facing * 5.4;
        }

        const ballNearGround = (this.ball.y >= FLOOR_Y - this.ball.radius - 28);
        const ballNearX = (Math.abs(dist) <= 35);

        if (ballNearGround && ballNearX) {
          this.ball.active = false;
          this.hasBall = true;
          this.setState('carrying');
          this.fetchesCount++;
          this.happiness = Math.min(100, this.happiness + 20);
          this.energy = Math.max(10, this.energy - 5);
          this.speak('Caught it on the bounce! ^ ^', 2500);
          sfx.ballCatch();
          logEvent(`Clawd caught the ball on the floor! (Fetches: ${this.fetchesCount})`);
        }
      } else {
        this.setState('idle');
      }
    } else if (this.state === 'carrying') {
      const dist = this.homeX - this.x;
      this.facing = dist > 0 ? 1 : -1;
      if (Math.abs(dist) > 12) {
        this.x += this.facing * 3.8;
      } else {
        this.hasBall = false;
        this.setState('happy', 2.8);
        this.speak('Brought it back! Throw again! > <', 2500);
        sfx.petSound();
        logEvent('Clawd returned the ball to you and is dancing with joy!');
      }
    } else if (this.state === 'eating') {
      if (this.snack && this.snack.active) {
        const dist = (this.snack.x - 115) - this.x;
        this.facing = dist > 0 ? 1 : -1;
        if (Math.abs(dist) > 12) {
          this.x += this.facing * 3.8;
        } else {
          this.stateTimer -= dt;
          if (this.animTick % 20 === 0) sfx.snackEat();
          if (this.stateTimer <= 0) {
            this.snack.active = false;
            this.snacksEaten++;
            this.energy = Math.min(100, this.energy + 25);
            this.happiness = Math.min(100, this.happiness + 10);
            this.setState('happy', 2.2);
            this.speak('Delicious! Energy restored! > <', 2500);
            logEvent('Clawd finished eating his snack happily.');
          }
        }
      } else {
        this.setState('idle');
      }
    }

    this.x = Math.max(20, Math.min(this.x, 710));

    const yPos = FLOOR_Y - 204;
    this.characterWrapper.style.transform = `translate(${this.x}px, ${yPos}px) scaleX(${this.facing})`;

    if (now > this.bubbleExpiry) {
      this.speechBubble.style.opacity = '0';
    } else {
      this.speechBubble.style.left = `${this.x + 115}px`;
      this.speechBubble.style.top = `${yPos - 14}px`;
    }
  }

  handleLookAt(targetScreenX, targetScreenY) {
    const rect = this.characterWrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height * 0.45;

    const dx = targetScreenX - centerX;
    const dy = targetScreenY - centerY;
    const dist = Math.hypot(dx, dy);
    const angle = Math.atan2(dy, dx);

    const maxOffset = 2.8;
    const offset = Math.min(maxOffset, dist * 0.012);
    const ox = (offset * Math.cos(angle)) * this.facing;
    const oy = offset * Math.sin(angle);

    const eyesEl = document.getElementById('eyes-js');
    const bodyEl = document.getElementById('body-js');
    const shadowEl = document.getElementById('shadow-js');

    if (eyesEl) eyesEl.style.transform = `translate(${ox}px, ${oy}px)`;
    if (bodyEl) bodyEl.style.transform = `translate(${ox * 0.33}px, ${oy * 0.33}px)`;
    if (shadowEl) shadowEl.style.transform = `translate(${-ox * 0.3}px, 0)`;
  }
}

const pet = new ClawdPetApp();

function logEvent(msg) {
  document.getElementById('eventLog').innerText = msg;
}

function updateUI() {
  document.getElementById('barHappiness').style.width = `${Math.round(pet.happiness)}%`;
  document.getElementById('txtHappiness').innerText = `${Math.round(pet.happiness)}%`;
  document.getElementById('barEnergy').style.width = `${Math.round(pet.energy)}%`;
  document.getElementById('txtEnergy').innerText = `${Math.round(pet.energy)}%`;

  document.getElementById('statFetches').innerText = pet.fetchesCount;
  document.getElementById('statLoc').innerText = pet.linesOfCode;
  document.getElementById('statSnacks').innerText = pet.snacksEaten;

  const now = new Date();
  document.getElementById('roomClock').innerText = `[${now.toTimeString().split(' ')[0]}]`;

  const loc = pet.linesOfCode;
  let title = 'Level 1 - Prompt Apprentice';
  if (loc >= 400) title = 'Level MAX - Principal Architect';
  else if (loc >= 260) title = 'Level 4 - Senior Developer';
  else if (loc >= 160) title = 'Level 3 - Autonomous Agent';
  else if (loc >= 80) title = 'Level 2 - Junior Companion';
  document.getElementById('levelTitle').innerText = title;
}

const stageWrapper = document.getElementById('stageWrapper');

stageWrapper.addEventListener('mousemove', (e) => {
  if (pet.state === 'idle') {
    pet.handleLookAt(e.clientX, e.clientY);
  }
});

stageWrapper.addEventListener('mousedown', (e) => {
  const rect = stageWrapper.getBoundingClientRect();
  const scaleX = (canvas.width || 940) / (rect.width || 940);
  const clickX = (e.clientX - rect.left) * scaleX;
  const clickY = e.clientY - rect.top;

  const charRect = pet.characterWrapper.getBoundingClientRect();
  if (
    e.clientX >= charRect.left &&
    e.clientX <= charRect.right &&
    e.clientY >= charRect.top &&
    e.clientY <= charRect.bottom
  ) {
    pet.pet();
  } else {
    pet.throwBall(clickX);
  }
});

document.getElementById('btnPet').addEventListener('click', (e) => { e.stopPropagation(); pet.pet(); });
document.getElementById('btnBall').addEventListener('click', (e) => { e.stopPropagation(); pet.throwBall(200 + Math.random() * 540); });
document.getElementById('btnCode').addEventListener('click', (e) => { e.stopPropagation(); pet.startCoding(); });
document.getElementById('btnSleep').addEventListener('click', (e) => { e.stopPropagation(); pet.toggleSleep(); });
document.getElementById('btnFeed').addEventListener('click', (e) => { e.stopPropagation(); pet.feedSnack(); });

document.getElementById('btnSound').addEventListener('click', (e) => {
  e.stopPropagation();
  sfx.enabled = !sfx.enabled;
  document.getElementById('soundStatusTxt').innerText = `Sound: ${sfx.enabled ? 'ON' : 'OFF'}`;
  pet.speak(`Sound ${sfx.enabled ? 'Enabled' : 'Muted'}!`, 1500);
});

window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (e.code === 'Space') {
    e.preventDefault();
    pet.pet();
  } else if (key === 'b') {
    pet.throwBall(200 + Math.random() * 540);
  } else if (key === 'c') {
    pet.startCoding();
  } else if (key === 's') {
    pet.toggleSleep();
  } else if (key === 'f') {
    pet.feedSnack();
  } else if (key === 'm') {
    sfx.enabled = !sfx.enabled;
    document.getElementById('soundStatusTxt').innerText = `Sound: ${sfx.enabled ? 'ON' : 'OFF'}`;
    pet.speak(`Sound ${sfx.enabled ? 'Enabled' : 'Muted'}!`, 1500);
  } else if (key === 'a' || e.code === 'ArrowLeft') {
    pet.touch();
    pet.facing = -1;
    pet.loadStateSVG('walk');
    pet.x = Math.max(20, pet.x - 22);
  } else if (key === 'd' || e.code === 'ArrowRight') {
    pet.touch();
    pet.facing = 1;
    pet.loadStateSVG('walk');
    pet.x = Math.min(710, pet.x + 22);
  }
});

let lastTimestamp = performance.now();

function gameLoop(timestamp) {
  const dt = (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pet.update(dt);

  if (pet.ball) pet.ball.draw(ctx);
  if (pet.snack) pet.snack.draw(ctx);

  if (pet.hasBall) {
    ctx.save();
    const ballHoldX = pet.x + 115;
    const ballHoldY = (FLOOR_Y - 204) + 40;
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(ballHoldX, ballHoldY, 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ballHoldX, ballHoldY, 7, -Math.PI * 0.35, Math.PI * 0.35);
    ctx.stroke();
    ctx.restore();
  }

  for (const p of pet.particles) {
    p.draw(ctx);
  }

  updateUI();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

try {
  if (window.resizeTo) {
    window.resizeTo(910, 850);
  }
} catch (e) {}
