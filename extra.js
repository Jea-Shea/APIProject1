.fogwrapper {
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    -webkit-filter: blur(1px) grayscale(0.2) saturate(1.2) sepia(0.2);
    filter: blur(1px) grayscale(0.2) saturate(1.2) sepia(0.2);
  }
  #foglayer_01, #foglayer_02, #foglayer_03 {
    height: 100%;
    position: absolute;
    width: 200%;
  }
  #foglayer_01 .image01, #foglayer_01 .image02,
  #foglayer_02 .image01, #foglayer_02 .image02,
  #foglayer_03 .image01, #foglayer_03 .image02 {
    float: left;
    height: 100%;
    width: 50%;
  }
  #foglayer_01 {
    -webkit-animation: foglayer_01_opacity 10s linear infinite, foglayer_moveme 15s linear infinite;
    -moz-animation: foglayer_01_opacity 10s linear infinite, foglayer_moveme 15s linear infinite;
    animation: foglayer_01_opacity 10s linear infinite, foglayer_moveme 15s linear infinite;
  }
  #foglayer_02, #foglayer_03 {
    -webkit-animation: foglayer_02_opacity 21s linear infinite, foglayer_moveme 13s linear infinite;
    -moz-animation: foglayer_02_opacity 21s linear infinite, foglayer_moveme 13s linear infinite;
    animation: foglayer_02_opacity 21s linear infinite, foglayer_moveme 13s linear infinite;
  }
  
  /* ---------- Moving Fog ---------- */
  /*
    'size: cover' || 'size: 100%'; results remain the same
    'attachment: scroll' can be added or removed; results remain the same
    'attachment: fixed' causing unexpected results in Chrome
    'repeat-x' || 'no-repeat'; results remain the same
  */ 
  #foglayer_01 .image01, #foglayer_01 .image02 {
    background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png") center center/cover no-repeat transparent;
  }
  #foglayer_02 .image01, #foglayer_02 .image02,
  #foglayer_03 .image01, #foglayer_03 .image02{
    background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png") center center/cover no-repeat transparent;
  }
  
  /* ---------- Keyframe Layer 1 ---------- */
  @-webkit-keyframes foglayer_01_opacity {
    0% { opacity: .1; }
    22% { opacity: .5; }
    40% { opacity: .28; }
    58% { opacity: .4; }
    80% { opacity: .16; }
    100% { opacity: .1; }
  }
  @-moz-keyframes foglayer_01_opacity {
    0% { opacity: .1; }
    22% { opacity: .5; }
    40% { opacity: .28; }
    58% { opacity: .4; }
    80% { opacity: .16; }
    100% { opacity: .1; }
  }
  @-o-keyframes foglayer_01_opacity {
    0% { opacity: .1; }
    22% { opacity: .5; }
    40% { opacity: .28; }
    58% { opacity: .4; }
    80% { opacity: .16; }
    100% { opacity: .1; }
  }
  @keyframes foglayer_01_opacity {
    0% { opacity: .1; }
    22% { opacity: .5; }
    40% { opacity: .28; }
    58% { opacity: .4; }
    80% { opacity: .16; }
    100% { opacity: .1; }
  }
  /* ---------- Keyframe Layer 2 ---------- */
  @-webkit-keyframes foglayer_02_opacity {
    0% { opacity: .5; }
    25% { opacity: .2; }
    50% { opacity: .1; }
    80% { opacity: .3; }
    100% { opacity: .5; }
  }
  @-moz-keyframes foglayer_02_opacity {
    0% { opacity: .5; }
    25% { opacity: .2; }
    50% { opacity: .1; }
    80% { opacity: .3; }
    100% { opacity: .5; }
  }
  @-o-keyframes foglayer_02_opacity {
    0% { opacity: .5; }
    25% { opacity: .2; }
    50% { opacity: .1; }
    80% { opacity: .3; }
    100% { opacity: .5; }
  }
  @keyframes foglayer_02_opacity {
    0% { opacity: .5; }
    25% { opacity: .2; }
    50% { opacity: .1; }
    80% { opacity: .3; }
    100% { opacity: .5; }
  }
  /* ---------- Keyframe Layer 3 ---------- */
  @-webkit-keyframes foglayer_03_opacity {
    0% { opacity: .8 }
    27% { opacity: .2; }
    52% { opacity: .6; }
    68% { opacity: .3; }
    100% { opacity: .8; }
  }
  @-moz-keyframes foglayer_03_opacity {
    0% { opacity: .8 }
    27% { opacity: .2; }
    52% { opacity: .6; }
    68% { opacity: .3; }
    100% { opacity: .8; }
  }
  @-o-keyframes foglayer_03_opacity {
    0% { opacity: .8 }
    27% { opacity: .2; }
    52% { opacity: .6; }
    68% { opacity: .3; }
    100% { opacity: .8; }
  }
  @keyframes foglayer_03_opacity {
    0% { opacity: .8; }
    27% { opacity: .2; }
    52% { opacity: .6; }
    68% { opacity: .3; }
    100% { opacity: .8; }
  }
  /* ---------- Keyframe moveMe ---------- */
  @-webkit-keyframes foglayer_moveme {
    0% { left: 0; }
    100% { left: -100%; }
  }
  @-moz-keyframes foglayer_moveme {
    0% { left: 0; }
    100% { left: -100%; }
  }
  @-o-keyframes foglayer_moveme {
    0% { left: 0; }
    100% { left: -100%; }
  }
  @keyframes foglayer_moveme {
    0% { left: 0; }
    100% { left: -100%; }
  }
  
  @media only screen
    and (min-width: 280px)
    and (max-width: 767px) {
      #foglayer_01 .image01, #foglayer_01 .image02,
      #foglayer_02 .image01, #foglayer_02 .image02,
      #foglayer_03 .image01, #foglayer_03 .image02 {
        width: 100%;
      }
    }