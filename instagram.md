---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: "Instagram"
image:
  path: "https://jamiepinheiro.com/assets/header3.jpg"
  alt: "Jamie Pinheiro with NYC in the background"
---

  <head>
    <style>
      html > div ~ div:last-of-type {
        display: none !important;
      }
    </style>
    <style type="text/css">
      #_copy {
        align-items: center;
        background: #4494d5;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;
        display: flex;
        font-size: 13px;
        height: 30px;
        justify-content: center;
        position: absolute;
        width: 60px;
        z-index: 1000;
      }
      #select-tooltip,
      #sfModal,
      .modal-backdrop,
      div[id^="reader-helper"] {
        display: none !important;
      }
      .modal-open {
        overflow: auto !important;
      }
      ._sf_adjust_body {
        padding-right: 0 !important;
      }
      .super_copy_btns_div {
        position: fixed;
        width: 154px;
        left: 10px;
        top: 45%;
        background: #e7f1ff;
        border: 2px solid #4595d5;
        font-weight: 600;
        border-radius: 2px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
          Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
          sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        z-index: 5000;
      }
      .super_copy_btns_logo {
        width: 100%;
        background: #4595d5;
        text-align: center;
        font-size: 12px;
        color: #e7f1ff;
        line-height: 30px;
        height: 30px;
      }
      .super_copy_btns_btn {
        display: block;
        width: 128px;
        height: 28px;
        background: #7f5711;
        border-radius: 4px;
        color: #fff;
        font-size: 12px;
        border: 0;
        outline: 0;
        margin: 8px auto;
        font-weight: 700;
        cursor: pointer;
        opacity: 0.9;
      }
      .super_copy_btns_btn:hover {
        opacity: 0.8;
      }
      .super_copy_btns_btn:active {
        opacity: 1;
      }
    </style>
    <style data-react-helmet="true">
      @font-face {
        font-family: "Open Sans";
        src: local("Open Sans Italic"), local("OpenSans-Italic"),
          url("chrome-extension://jcggkkmhpnjfdkbdopniflkghfkgoalo/fonts/OpenSans-Italic.woff2")
            format("woff2"),
          url("chrome-extension://jcggkkmhpnjfdkbdopniflkghfkgoalo/fonts/OpenSans-Italic.woff")
            format("woff");
        font-weight: 400;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: "Open Sans";
        src: local("Open Sans Regular"), local("OpenSans-Regular"),
          url("chrome-extension://jcggkkmhpnjfdkbdopniflkghfkgoalo/fonts/OpenSans-Regular.woff2")
            format("woff2"),
          url("chrome-extension://jcggkkmhpnjfdkbdopniflkghfkgoalo/fonts/OpenSans-Regular.woff")
            format("woff");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "Open Sans";
        src: local("Open Sans SemiBold Italic"),
          local("OpenSans-SemiBoldItalic"),
          url("chrome-extension://jcggkkmhpnjfdkbdopniflkghfkgoalo/fonts/OpenSans-SemiBoldItalic.woff2")
            format("woff2"),
          url("chrome-extension://jcggkkmhpnjfdkbdopniflkghfkgoalo/fonts/OpenSans-SemiBoldItalic.woff")
            format("woff");
        font-weight: 600;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: "Open Sans";
        src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"),
          url("chrome-extension://jcggkkmhpnjfdkbdopniflkghfkgoalo/fonts/OpenSans-SemiBold.woff2")
            format("woff2"),
          url("chrome-extension://jcggkkmhpnjfdkbdopniflkghfkgoalo/fonts/OpenSans-SemiBold.woff")
            format("woff");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
    </style>
    <style type="text/css">
      [data-behold-id] {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        min-width: 50px;
        box-sizing: border-box;
      }
      [data-behold-id] * {
        box-sizing: border-box;
      }

      .behold-posts {
        display: grid;
        width: 100%;
      }

      .behold-post {
        position: relative;
        display: block;
        width: calc(100% + 0.5px);
        height: 0;
        padding-bottom: 100%;
        margin: 0 0 -1px;
        overflow: hidden;
        transform: translateZ(0);
        align-self: stretch;
      }
      .behold-post.behold-post--has-row-gap {
        margin: 0;
      }
      .behold-post::before,
      .behold-post::after {
        content: "";
        position: absolute;
        pointer-events: none;
      }
      .behold-post::before {
        z-index: 2;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0);
        transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1);
        will-change: background-color;
      }
      .behold-post::after {
        z-index: 3;
        height: 12%;
        max-height: 30px;
        min-height: 20px;
        width: 100%;
        top: 50%;
        left: 0%;
        background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 35 35' enable-background='new 0 0 35 35' xml:space='preserve'%3E%3Cpath fill='%23FFFFFF' d='M17.6,3.2c4.7,0,5.2,0,7.1,0.1c1.7,0.1,2.6,0.4,3.2,0.6c0.8,0.3,1.4,0.7,2,1.3c0.6,0.6,1,1.2,1.3,2 c0.2,0.6,0.5,1.5,0.6,3.3c0.1,1.8,0.1,2.4,0.1,7.1s0,5.2-0.1,7.1c-0.1,1.7-0.4,2.6-0.6,3.2c-0.6,1.5-1.8,2.7-3.3,3.3 c-0.6,0.2-1.5,0.5-3.2,0.6c-1.8,0.1-2.4,0.1-7.1,0.1s-5.2,0-7.1-0.1c-1.7-0.1-2.6-0.4-3.2-0.6c-0.8-0.3-1.4-0.7-2-1.3 c-0.6-0.6-1-1.2-1.3-2c-0.2-0.6-0.5-1.5-0.6-3.2c-0.1-1.8-0.1-2.4-0.1-7.1s0-5.2,0.1-7.1C3.4,8.7,3.7,7.8,4,7.2 c0.3-0.8,0.7-1.4,1.3-2c0.6-0.6,1.2-1,2-1.3c0.6-0.2,1.5-0.5,3.2-0.6C12.4,3.2,12.9,3.2,17.6,3.2 M17.6,0c-4.8,0-5.3,0-7.2,0.1 C8.5,0.2,7.2,0.5,6.1,0.9C5,1.4,3.9,2,3,2.9C2.1,3.8,1.5,4.9,1,6c-0.4,1.1-0.7,2.4-0.8,4.2c-0.1,1.9-0.1,2.5-0.1,7.2s0,5.3,0.1,7.2 C0.3,26.6,0.6,27.8,1,29c0.4,1.2,1.1,2.2,2,3.1c0.9,0.9,1.9,1.6,3.1,2c1.1,0.4,2.4,0.7,4.2,0.8s2.5,0.1,7.2,0.1s5.3,0,7.2-0.1 c1.9-0.1,3.1-0.4,4.2-0.8c2.3-0.9,4.2-2.8,5.1-5.1c0.4-1.1,0.7-2.4,0.8-4.2c0.1-1.9,0.1-2.5,0.1-7.2s0-5.3-0.1-7.2 c-0.1-1.9-0.4-3.1-0.8-4.2c-0.4-1.2-1.1-2.2-2-3.1c-0.9-0.9-1.9-1.6-3.1-2c-1.1-0.4-2.4-0.7-4.2-0.8C22.9,0,22.3,0,17.6,0L17.6,0 L17.6,0z'/%3E%3Cpath fill='%23FFFFFF' d='M17.6,8.5c-5,0-9,4-9,9s4,9,9,9s9-4,9-9l0,0C26.6,12.5,22.6,8.5,17.6,8.5z M17.6,23.3 c-3.2,0-5.8-2.6-5.8-5.8s2.6-5.8,5.8-5.8s5.8,2.6,5.8,5.8S20.8,23.3,17.6,23.3z'/%3E%3Ccircle fill='%23FFFFFF' cx='26.9' cy='8.2' r='2.1'/%3E%3C/svg%3E");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: auto 100%;
        opacity: 0;
        transform: translateY(-50%) scale(0.75);
        will-change: transform;
        transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .behold-post.behold-post--video::after {
        background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 35 35' enable-background='new 0 0 35 35' xml:space='preserve'%3E%3Cpath fill='%23FFFFFF' d='M30.1,15.5L7.2,2.3C5.7,1.4,3.7,2.5,3.7,4.2v26.5c0,1.7,1.9,2.9,3.4,1.9l22.9-13.2 C31.7,18.6,31.7,16.4,30.1,15.5z'/%3E%3C/svg%3E");
      }
      .behold-post.behold-post--album::after {
        background-image: url("data:image/svg+xml,%3Csvg version='1.1'  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 35 35' enable-background='new 0 0 35 35' xml:space='preserve'%3E%3Cpath fill='%23FFFFFF' d='M27.3,22.7v-17c0-2.6-2.1-4.7-4.7-4.7H5.7C3.1,1,1,3.1,1,5.7v17c0,2.6,2.1,4.7,4.7,4.7h17 C25.2,27.3,27.3,25.2,27.3,22.7z M31.3,9.3v14.6c0,4.1-3.4,7.4-7.4,7.4H9.2c-0.5,0-0.8,0.6-0.5,1c0.9,1,2.2,1.6,3.7,1.6h12.1 c5.2,0,9.3-4.2,9.3-9.3V12.5c0-1.5-0.6-2.8-1.6-3.7C31.9,8.4,31.3,8.8,31.3,9.3z'/%3E%3C/svg%3E");
      }

      .behold-fade .behold-post:hover::before {
        background-color: rgba(0, 0, 0, 0.3);
        transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .behold-fade .behold-post:hover::after {
        opacity: 1;
        transform: translateY(-50%);
      }

      .behold-zoomFade .behold-post:hover .behold-image,
      .behold-zoomFade .behold-post:hover .behold-video {
        transform: scale(1.1);
      }
      .behold-zoomFade .behold-post:hover::before {
        background-color: rgba(0, 0, 0, 0.3);
        transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .behold-zoomFade .behold-post:hover::after {
        opacity: 1;
        transform: translateY(-50%);
      }

      .behold-blur .behold-post:hover .behold-image,
      .behold-blur .behold-post:hover .behold-video {
        filter: brightness(97%) blur(3px);
        transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .behold-blur .behold-post:hover::after {
        opacity: 1;
        transform: translateY(-50%);
      }

      .behold-zoomBlur .behold-post:hover .behold-image,
      .behold-zoomBlur .behold-post:hover .behold-video {
        transform: scale(1.1);
        filter: brightness(97%) blur(3px);
        transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .behold-zoomBlur .behold-post:hover::after {
        opacity: 1;
        transform: translateY(-50%);
      }

      .behold-toGreyscale .behold-post:hover .behold-image,
      .behold-toGreyscale .behold-post:hover .behold-video {
        filter: grayscale(100%);
        transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .behold-toGreyscale .behold-post:hover::after {
        opacity: 1;
        transform: translateY(-50%);
      }

      .behold-zoomToGreyscale .behold-post:hover .behold-image,
      .behold-zoomToGreyscale .behold-post:hover .behold-video {
        transform: scale(1.1);
        filter: grayscale(100%);
        transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .behold-zoomToGreyscale .behold-post:hover::after {
        opacity: 1;
        transform: translateY(-50%);
      }

      .behold-fromGreyscale .behold-post {
        filter: grayscale(100%);
      }
      .behold-fromGreyscale .behold-post:hover {
        filter: grayscale(0%);
        transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .behold-fromGreyscale .behold-post:hover::after {
        opacity: 1;
        transform: translateY(-50%);
      }

      .behold-zoomFromGreyscale .behold-post {
        filter: grayscale(100%);
      }
      .behold-zoomFromGreyscale .behold-post:hover {
        filter: grayscale(0%);
      }
      .behold-zoomFromGreyscale .behold-post:hover .behold-image,
      .behold-zoomFromGreyscale .behold-post:hover .behold-video {
        transform: scale(1.1);
        transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .behold-zoomFromGreyscale .behold-post:hover::after {
        opacity: 1;
        transform: translateY(-50%);
      }

      img.behold-image {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        vertical-align: middle;
        transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
        will-change: transform, opacity;
        object-fit: cover;
        object-position: center center;
        border-radius: 0px;
      }
      img.behold-image.behold-image--loaded {
        opacity: 1;
      }

      .behold-video {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
        will-change: transform;
        object-fit: cover;
        pointer-events: none;
      }
      .behold-post--loaded .behold-video {
        opacity: 1;
      }
    </style>

  </head>
  <body _c_t_common="1">
    <div
      data-behold-id="9UvOvVuHf8lqfvHS1aCp"
      class="behold-zoomFade"
      style="justify-content: center"
    >
      <div
        class="behold-posts"
        style="
          grid-template-columns: repeat(1, 1fr);
          gap: 0px;
          max-width: 650px;
        "
      >
        <a
          class="behold-post behold-post--album behold-post--loaded"
          href="https://www.instagram.com/p/CcYQmM7rUYl/"
          target="_blank"
          style="border-radius: 0%"
          ><img
            class="behold-image behold-image--loaded"
            alt="Jamie Pinheiro sitting on rock"
            height="100px"
            width="100px"
            loading="lazy"
            src="https://scontent-atl3-1.cdninstagram.com/v/t51.29350-15/278519836_673420833917217_8121649238621222980_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=g177HZXkRTEAX87F89T&amp;_nc_ht=scontent-atl3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT_b6N4WpDjD7pPDrcRZ0xPDK1cYYa6aEJagJEjfueg_fw&amp;oe=62A7436F" /></a
        ><a
          class="behold-post behold-post--photo behold-post--loaded"
          href="https://www.instagram.com/p/CYCEemKrSSy/"
          target="_blank"
          style="border-radius: 0%"
          ><img
            class="behold-image behold-image--loaded"
            alt="Jamie Pinheiro with NYC in the background"
            height="100px"
            width="100px"
            loading="lazy"
            src="https://scontent-atl3-1.cdninstagram.com/v/t51.29350-15/270238583_1249317242216561_1769552621543242407_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=lwbqo6bSg9EAX_-9-Mb&amp;_nc_ht=scontent-atl3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT-aDvIeQ74gDogS_8xNTEl2UNcA3-VFYFdz3WYLziMVQA&amp;oe=62A85B0E" /></a
        ><a
          class="behold-post behold-post--album behold-post--loaded"
          href="https://www.instagram.com/p/CXByXYnLBvo/"
          target="_blank"
          style="border-radius: 0%"
          ><img
            class="behold-image behold-image--loaded"
            alt="Jamie Pinheiro on ledge"
            height="100px"
            width="100px"
            loading="lazy"
            src="https://scontent-atl3-1.cdninstagram.com/v/t51.29350-15/263475783_594364964975577_5997550568928708535_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=0yxg4Ou2TQ4AX9Kk_aZ&amp;_nc_ht=scontent-atl3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT8oP4tsDTRlTSKio4TVtJr4vaGYQNhqGtilJRjOvrr2ZQ&amp;oe=62A78D94" /></a
        ><a
          class="behold-post behold-post--photo behold-post--loaded"
          href="https://www.instagram.com/p/CRfAJLPrt4g/"
          target="_blank"
          style="border-radius: 0%"
          ><img
            class="behold-image behold-image--loaded"
            alt="Jamie Pinheiro canoeing"
            height="100px"
            width="100px"
            loading="lazy"
            src="https://scontent-atl3-1.cdninstagram.com/v/t51.29350-15/219328502_324130406047555_2523572923428401359_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=E5faWXyOPKUAX_-AEDC&amp;_nc_ht=scontent-atl3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT-x50CSVup_wmtbtuvTpyKsOlYVB3AQl2gGB4bhUtz4SQ&amp;oe=62A724ED" /></a
        ><a
          class="behold-post behold-post--photo behold-post--loaded"
          href="https://www.instagram.com/p/Bl6HoL9Dt1C/"
          target="_blank"
          style="border-radius: 0%"
          ><img
            class="behold-image behold-image--loaded"
            alt="Jamie Pinheiro sitting on ledge"
            height="100px"
            width="100px"
            loading="lazy"
            src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/37703690_416798162143943_8842608815103803392_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=b9erhVwMDFgAX8ecJFb&amp;_nc_ht=scontent-atl3-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT9lTg_9gBqnaKwotQaxBHl47Sv0GML1rM93_5_84GxEOQ&amp;oe=62A77467"
        /></a>
      </div>
    </div>
  </body>
