<script>
  import Header from '../../components/Header.svelte';
</script>

<svelte:head>
  <title>Contact | Kapeesh.dev</title>
  <meta name='description' content="Let's connect" />
</svelte:head>

<Header titleColor='rgb(125 116 190 / 11%)' pageTitleColor='rgb(21, 0, 158)' subtitleColor='#5a1f9f'>
  <svelte:fragment slot='title'>ContactContactContactContactContactContact</svelte:fragment>
  <svelte:fragment slot='pageTitle'>Contact me</svelte:fragment>
  <svelte:fragment slot='subtitle'>Learning through connecting</svelte:fragment>
</Header>

<div class='flex container content-center flex flex-col md:flex-row justify-evenly'>
  <div
    class='gradient flex text-center pl-3 mx-auto md:pl-0 justify-center items-center rounded-full block'
  >
    <a href='mailto:kapeeshmanilal@gmail.com' class='text-center cursor-pointer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='137'
        height='139'
        viewBox='0 0 137 139'
        class='m-auto'
      >
        <path
          fill='#FFF'
          d='M13.1341304,139 L123.86587,139 C131.122058,138.991795 137,133.116433 137,125.871644 L137,55.6654188 C137,54.5700988 136.513942,53.5310356 135.674674,52.8256498 L117.343478,37.3630335 L117.343478,10.4075302 C117.343478,4.65960999 112.676533,0 106.919565,0 L30.8101087,0 C25.0531405,0 20.3861957,4.65960999 20.3861957,10.4075302 L20.3861957,36.7980533 L1.32532609,52.8256498 C0.486058444,53.5310356 0,54.5700988 0,55.6654188 L0,125.871644 C0,133.116433 5.87794235,138.991795 13.1341304,139 Z M124.301707,132 L13.6834146,132 C10.5421463,131.9919 8,129.47476 8,126.372515 L8,64 L50.402439,93.6214347 L20.3041463,116.366465 C18.6607625,117.583687 18.327706,119.886112 19.5602439,121.509075 C20.7927818,123.132038 23.1241771,123.460956 24.767561,122.243734 L56.7702439,98.0587727 L67.184878,105.405359 C68.4729427,106.30636 70.1965695,106.30636 71.4846341,105.405359 L81.8992683,98.0587727 L113.916829,122.199654 C115.560213,123.416877 117.891608,123.087959 119.124146,121.464996 C120.356684,119.842033 120.023628,117.539608 118.380244,116.322385 L88.3414634,93.6214347 L130,64.5289542 L130,126.387208 C129.991824,129.483717 127.452056,131.991926 124.316585,132 L124.301707,132 Z M127,55.7190161 L117,63 L117,47 L127,55.7190161 Z M30.9609871,8 L107.024134,8 C108.667659,8 110,9.32271061 110,10.9543568 L110,68.180249 L68.9925603,97 L28,68.180249 L28,10.9395851 C28.0081394,9.31945596 29.3290624,8.00808059 30.9609871,8 Z M21,63 L11,55.2727273 L21,46 L21,63 Z M68.9998121,78 L69.9472753,78 C71.9912967,78 73.6483035,76.3429832 73.6483035,74.2989494 C73.6483035,72.2549156 71.9912967,70.5978988 69.9472753,70.5978988 L68.9998121,70.5978988 C55.9671315,70.5978988 45.4020564,60.0327596 45.4020564,47 C45.4020564,33.9672404 55.9671315,23.4021012 68.9998121,23.4021012 C82.0324927,23.4021012 92.5975678,33.9672404 92.5975678,47 L92.5975678,53.3213945 C92.4668059,55.5026254 90.6597561,57.2045988 88.4746224,57.2045988 C86.2894887,57.2045988 84.4824389,55.5026254 84.351677,53.3213945 L84.351677,47 C84.3984234,39.8224492 79.479358,33.5648299 72.4937876,31.9153952 C65.5082171,30.2659606 58.3096686,33.6623658 55.1409807,40.102763 C51.9722928,46.5431602 53.6742342,54.3186768 59.2436772,58.8464079 C64.8131201,63.3741391 72.7722882,63.4527124 78.4300319,59.0358166 C80.9972179,63.6262087 86.3479094,65.8944422 91.4319746,64.5475231 C96.5160398,63.2006041 100.041886,58.5807136 100,53.3213945 L100,47 C100,29.8791728 86.1205355,16 68.9998121,16 C51.8790886,16 38,29.8791728 38,47 C38,64.1208272 51.8790886,78 68.9998121,78 Z M68.0001169,55 C64.7644662,55 61.8474186,53.0508911 60.6091887,50.0615396 C59.3709588,47.0721882 60.0553948,43.6312959 62.3433453,41.3433453 C64.6312959,39.0553948 68.0721882,38.3709588 71.0615396,39.6091887 C74.0508911,40.8474186 76,43.7644662 76,47.0001169 C76,51.4183303 72.4183303,55 68.0001169,55 Z'
        />
      </svg>
      <br />
      <p class="forceWhite text-3xl font-secondary text-white">
      Email me
      </p>
    </a>
  </div>

  <div class='flex flex-col mt-3 md:mt-0 pl-3 md:pl-0 md:flex-row'>
    <div class='flex flex-col md:mr-24'>
      <div class='flex flex-row items-center mb-10'>
        <a href='https://github.com/kappy904' class='cursor-pointer'>
          <i class='icon-github mr-6 text-3xl md:text-6xl'></i>
        </a>
        <a
          href='https://github.com/kappy904'
          class='font-bold font-primary text-xl tracking-widest'
        >
          Github
        </a>
      </div>
      <div class='flex flex-row items-center mb-10'>
        <a href='https://www.linkedin.com/in/kapeesh-m-53323913/'>
          <i class='icon-linkedin mr-6 text-3xl md:text-6xl'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/kapeesh-m-53323913/'
          class='font-bold font-primary text-xl tracking-widest'
        >
          LinkedIn
        </a>
      </div>
      <div class='flex flex-row items-center mb-10'>
        <a href='https://www.instagram.com/kapeeshkappykap/'>
          <i class='icon-instagram mr-6 text-3xl md:text-6xl'></i>
        </a>
        <a
          href='https://www.instagram.com/kapeeshkappykap/'
          class='font-bold font-primary text-xl tracking-widest'
        >
          Instagram
        </a>
      </div>
    </div>
    <div class='flex flex-col'>
      <div class='flex flex-row items-center mb-10'>
        <a href='https://stackoverflow.com/users/5846771/kapeesh-manilal'>
          <i class='icon-stackoverflow mr-6 text-3xl md:text-6xl'></i>
        </a>
        <a
          href='https://stackoverflow.com/users/5846771/kapeesh-manilal'
          class='font-bold font-primary text-xl tracking-widest'
        >
          Stack Overflow
        </a>
      </div>
      <div class='flex flex-row items-center mb-10'>
        <a href='https://steamcommunity.com/profiles/76561198041254623/'>
          <i class='icon-steam2 mr-6 text-3xl md:text-6xl'></i>
        </a>
        <a
          href='https://steamcommunity.com/profiles/76561198041254623/'
          class='font-bold font-primary text-xl tracking-widest'
        >
          Steam
        </a>
      </div>
      <div class='flex flex-row items-center mb-10'>
        <a href='https://codepen.io/KapeeshKappyKap'>
          <i class='icon-terminal mr-6 text-3xl md:text-6xl'></i>
        </a>
        <a
          href='https://codepen.io/KapeeshKappyKap'
          class='font-bold font-primary text-xl tracking-widest'
        >
          CodePen
        </a>
      </div>
    </div>
  </div>
</div>

<style lang='scss'>
    .gradient {
        background: linear-gradient(130deg, theme('colors.purple') 30%, theme('colors.blue'));
        width: 300px;
        height: 300px;
        flex: none;
    }

    .forceWhite {
        -webkit-background-clip: revert;
        background-clip: revert;
        -webkit-text-fill-color: white;
        text-fill-color: white;
    }
</style>
