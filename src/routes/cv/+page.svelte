<script>
  import Header from '../../components/Header.svelte';
  import Testimonial from '../../components/Testimonial.svelte';
  import pp from '$lib/images/cv/cv-pp.webp';
  import ppFallback from '$lib/images/cv/cv-pp.jpg';
  import lobster from '$lib/images/cv/cv-lobster.webp';
  import lobsterFallback from '$lib/images/cv/cv-lobster.jpg';
  import responsive from '$lib/images/cv/cv-responsive.webp';
  import responsiveFallback from '$lib/images/cv/cv-responsive.jpg';
</script>

<svelte:head>
  <title>CV Download | Kapeesh.dev</title>
  <meta name='description' content='Download my CV' />
</svelte:head>

<Header titleColor='rgb(125 116 190 / 11%)' pageTitleColor='rgb(21, 0, 158)' subtitleColor='#5a1f9f'>
  <svelte:fragment slot='title'>CurriculumVitaeCurriculumVitaeCurriculumVitaeCurriculumVitae</svelte:fragment>
  <svelte:fragment slot='pageTitle'>CV Download</svelte:fragment>
  <svelte:fragment slot='subtitle'>Learn about my skills</svelte:fragment>
</Header>

<div class='flex container content-center flex flex-col md:flex-row justify-evenly m-auto'>
  <div class='flex text-center pl-3 mx-auto md:pl-0 justify-center items-center rounded-full block gradient'>
    <a href='./assets/downloads/Kapeesh_CV.pdf'
       download
       class='text-center'>
      <svg xmlns='http://www.w3.org/2000/svg'
           width='124'
           height='125'
           viewBox='0 0 124 125'
           class='m-auto'>
        <path fill='#FFF'
              fill-rule='evenodd'
              d='M92.0059145,48 C93.7174414,61.3089353 95.4172239,74.5246262 97.118276,87.7515147 C97.5043641,87.7782008 97.7498354,87.82948 97.9879001,87.8063521 C100.680148,87.544305 103.369434,87.2502346 106.063269,87.0061876 C108.898567,86.7492684 111.737675,86.5335819 114.575724,86.3070117 C116.396972,86.1615462 118.218856,86.0233018 120.041374,85.8960457 C120.390535,85.8716619 120.755568,85.8643363 121.09362,85.9375923 C121.532188,86.032825 121.841461,85.9103829 122.122377,85.5923474 C122.401389,85.2765095 122.728014,84.8700435 123.181924,85.1325092 C123.671279,85.4153819 124.05705,85.9123713 123.993037,86.5016632 C123.943096,86.9620247 123.735504,87.4409094 123.48178,87.8390033 C120.945491,91.8191048 118.378835,95.7802644 115.8326,99.7541914 C108.457989,111.264588 101.095968,122.782938 93.7150079,134.289463 C89.2599168,141.234756 84.7836643,148.166969 80.3025448,155.095937 C79.7382784,155.968416 79.0894725,156.787731 78.4730435,157.626826 C78.1764677,158.03078 77.7902737,158.117013 77.3701159,157.835292 C76.8166418,157.464198 76.2708915,157.079813 75.7419645,156.675336 C69.3359062,151.777965 62.9242401,146.88771 56.5321482,141.972549 C44.5551627,132.763017 32.6073798,123.516126 20.6130421,114.328781 C14.1267824,109.360561 7.56942064,104.483074 1.04411831,99.5648771 C0.98804083,99.5225979 0.921276888,99.4909932 0.874192968,99.4409698 C0.541431328,99.0865156 -0.139433903,98.9788293 0.0253069152,98.2700255 C0.198300645,97.5249076 0.93016464,96.8228015 1.69027899,96.7471385 C3.75181405,96.5420218 5.81641751,96.3665214 7.87879903,96.168835 C10.6062806,95.9074158 13.3323867,95.6331245 16.0598683,95.3702402 C17.6685513,95.2151469 19.2780807,95.0682163 20.8878217,94.9231695 C23.3023275,94.7057039 25.7174681,94.4964012 28.1316564,94.2765286 C28.8534688,94.2108075 29.5732709,94.1216446 30.3074626,94.0416909 C28.2418011,80.1980917 26.197195,66.4942021 24.1434897,52.729824 C25.1633591,52.6356378 26.0294916,52.5373701 26.8983751,52.4786607 C30.3014316,52.2484276 33.7049113,52.0234272 37.1092375,51.8108802 C39.600453,51.6552636 42.0944195,51.5408796 44.5846827,51.3733328 C47.0028917,51.2105998 49.4170801,50.9909366 51.83476,50.8205641 C53.4484159,50.7069127 55.0658808,50.6474707 56.6802774,50.5426101 C58.3977295,50.4310517 60.1133829,50.2904002 61.8304118,50.1703651 C63.4079877,50.0600625 64.9867274,49.968074 66.5639858,49.8542132 C68.9117276,49.684678 71.2583056,49.4988171 73.6059416,49.3279214 C75.1131561,49.2182468 76.6221693,49.1325373 78.1290664,49.0191998 C80.3365087,48.8531181 82.5422581,48.6673619 84.7494888,48.4989778 C86.2209407,48.3867915 87.6936622,48.2889425 89.1660663,48.1874306 C90.0724054,48.1249538 90.9791676,48.0676048 92.0059145,48 Z M58.5940007,62.2915071 C55.5629601,63.977127 53.3517087,66.316818 52.3884458,69.7350462 C51.6972115,72.188284 51.705676,74.6130566 52.2857076,77.0516432 C52.9657264,79.9101957 54.3087291,82.4620151 56.12966,84.7715665 C56.7053535,85.5017193 57.3028432,86.2150231 57.9255148,86.9791875 C57.4110833,87.3497581 56.9695525,87.6908169 56.5053791,87.9985967 C53.6439465,89.8961356 51.4264525,92.3802455 49.6535577,95.2814959 C48.3440957,97.4244423 47.674975,99.7548193 47.7328512,102.238615 C47.77073,103.863747 47.9335663,105.506146 48.2471769,107.100928 C49.1774282,111.831485 50.6494091,116.408204 52.5500124,120.845946 C52.988898,121.870483 53.4967695,122.866868 53.9945894,123.865557 C54.30164,124.481535 54.8291916,124.806373 55.5269859,124.774768 C56.1924033,124.744733 56.8606776,124.695337 57.5182654,124.594872 C59.0450541,124.361604 60.559146,124.033313 62.0914366,123.850278 C64.879757,123.517277 67.6756954,123.242986 70.4717396,122.979264 C73.547748,122.689275 76.629999,122.46417 79.7048435,122.162879 C82.0797776,121.930134 84.4437078,121.585203 86.8200174,121.370877 C87.6257344,121.298144 87.9310921,120.931027 88.0388032,120.22463 C88.2951725,118.541836 88.5820141,116.863542 88.8283318,115.179282 C89.4283608,111.077157 89.8416412,106.967707 89.4351324,102.812837 C89.1767528,100.173634 88.7441098,97.5728379 87.9548986,95.0369256 C87.3890451,93.2189217 86.5448146,91.5457554 85.2259358,90.1356826 C82.9173424,87.667689 80.2987357,85.6611033 76.9563064,84.7484386 C76.0774771,84.5083683 75.1875381,84.3080656 74.2490339,84.0761581 C74.2612017,83.9574834 74.2525255,83.9157275 74.269772,83.8940647 C74.3989618,83.7310178 74.5285748,83.5678663 74.6667582,83.4122497 C77.1716228,80.5896972 78.4336835,77.2862716 78.2980394,73.5477055 C78.1757271,70.1736402 76.8653128,67.1802966 74.760397,64.5443375 C72.902328,62.2175186 70.4116415,60.8711785 67.4684203,60.5445616 C64.3583422,60.1994213 61.3529068,60.7571085 58.5940007,62.2915071 Z M67.894387,63.7977568 C70.2674392,64.3006899 72.0605109,65.5590688 73.2983115,67.64235 C74.7314539,70.0543997 75.480582,72.6154046 75.2731507,75.4185664 C75.1543762,77.0245423 74.5721687,78.5006008 73.597581,79.7543771 C72.3334803,81.3804369 70.9226081,82.8958263 69.5673055,84.4524294 C69.3146975,84.7425992 69.0063078,84.9860113 68.7581538,85.2794239 C68.0382951,86.1299541 68.3777571,87.2641687 69.4391987,87.618565 C70.5045641,87.9742165 71.5552948,88.3784041 72.6341284,88.6878209 C73.9186965,89.0563387 75.2159905,89.3954629 76.5259042,89.6602141 C78.9507082,90.1503856 80.7494005,91.5371128 82.1577274,93.446334 C84.2598251,96.2959396 85.2954969,99.5687707 85.9071859,103.000494 C86.394904,105.737651 86.2356188,108.47167 85.9714514,111.213011 C85.8313611,112.666999 85.796365,114.131342 85.6377161,115.582923 C85.4953987,116.886386 85.6080225,118.238489 84.9107522,119.593103 C83.5078337,119.708795 82.1107479,119.839758 80.7110108,119.936412 C77.339616,120.169154 73.9673729,120.388194 70.5950236,120.607965 C69.0836173,120.706502 67.5645755,120.732862 66.0612289,120.900123 C63.8943354,121.141233 61.7369863,121.46927 59.5792131,121.783603 C58.5395115,121.935069 57.5079756,122.140091 56.4190673,122.33026 C56.1739888,121.566028 55.9648607,120.871775 55.7291144,120.186204 C54.7553751,117.35344 53.6525744,114.556868 52.8329239,111.681635 C52.1775428,109.382766 51.7737093,107.002306 51.4240667,104.63419 C51.1262819,102.617227 51.7103982,100.704973 52.648187,98.9017148 C53.5726667,97.1241719 54.8035079,95.5666324 56.1415637,94.0899499 L56.5089967,93.6891184 L57.1944229,92.94583 C58.2231383,91.8317399 59.2697629,90.736117 60.541075,89.8570777 C61.1304937,89.4496474 61.6021984,88.8473411 62.0426187,88.2707672 C62.3078466,87.9234839 62.4714798,87.4681453 62.5674539,87.0368655 C62.6660792,86.5929287 62.4725403,86.219913 61.9690209,86.0831964 C60.8071512,85.7679217 59.8828306,85.0695895 59.0856623,84.223871 C56.697021,81.690063 55.0870954,78.7444314 54.5624724,75.3027704 C54.1725313,72.7450082 54.4757246,70.2579579 56.1517185,68.1581493 C58.1495703,65.6551993 60.7437341,64.0767341 64.0016567,63.660831 C65.3097676,63.4937793 66.603562,63.5241143 67.894387,63.7977568 Z M90.6741349,40 C90.7916791,40.9559209 90.892401,41.7745175 91,42.6494411 C68.4982761,45.1019562 46.06236,47.5471575 23.5573562,50 C23.1484379,48.9875338 23.1671646,47.9129552 23,46.7170989 C23.9569642,46.5939656 24.8101382,46.4645009 25.6673326,46.3773906 C29.4411252,45.9939088 33.2153411,45.6153393 36.9908265,45.2493232 C39.6477906,44.9918129 42.307823,44.7686883 44.9647872,44.5096498 C47.5508651,44.2575976 50.1338748,43.9711597 52.7197411,43.7149594 C55.9701394,43.3929351 59.2230769,43.0965636 62.4731578,42.7699546 C65.687584,42.447057 68.8986246,42.0870448 72.1132624,41.7679679 C74.7701207,41.5042354 77.4314227,41.2890796 80.0885985,41.0291678 C82.3601319,40.8071347 84.6277508,40.5428565 86.8987553,40.3155838 C88.1181043,40.193542 89.3409447,40.1100341 90.6741349,40 Z M90.5111337,33.0078417 C90.6832189,34.3007924 90.8323735,35.422356 91,36.681693 C90.0361744,36.8129364 89.1093985,36.9580962 88.1779517,37.0624701 C84.8509007,37.4354325 81.5227882,37.7989745 78.1942511,38.1573782 C75.8810271,38.4065907 73.5656799,38.6334298 71.2529867,38.8849975 C68.3109777,39.2051842 65.3713042,39.5483868 62.429189,39.8664325 C60.0812508,40.1202482 57.7301277,40.3422701 55.3821894,40.59448 C52.4046169,40.9143456 49.4293798,41.2579764 46.4518073,41.5771997 L39.4037461,42.3016075 L39.4037461,42.3016075 C36.4608878,42.6176193 33.5204712,42.9563257 30.5780375,43.2767266 C28.2995278,43.5247616 26.0199565,43.7617704 23.7399606,43.996103 C23.5714848,44.0134451 23.3967457,43.9688053 23.1151035,43.9427921 C22.7470471,41.3381569 22.381751,38.7538612 22,36.0518104 C23.2146815,35.9827631 24.2943275,35.8984076 25.3754598,35.8646868 C27.6701058,35.7931774 29.9657073,35.7586002 32.2603533,35.6891247 C34.7315432,35.6141897 37.2024146,35.525017 39.6727552,35.4268521 C43.0591495,35.2923972 46.4449069,35.1470232 49.8307704,34.9999364 C53.0038895,34.86227 56.1767962,34.7182877 59.349703,34.5734489 C62.4168745,34.4333204 65.484046,34.2930848 68.5508991,34.1449275 C71.3705057,34.0087598 74.1896877,33.861566 77.0089759,33.7200458 C79.8638276,33.5765987 82.7192102,33.4435354 85.5732126,33.2872423 C86.8400186,33.2177668 88.1039582,33.0970144 89.3700211,33.0113743 C89.7151469,32.9880374 90.0630328,33.0078417 90.5111337,33.0078417 Z'
              transform='translate(0 -33)' />
      </svg>
      <br>
      <p class='text-3xl font-secondary text-white force-white'>Download CV</p>
    </a>
  </div>

  <div class='mt-3 md:mt-0 pl-3 md:pl-0'>
    <div class='flex flex-col py-6 md:py-0'>
      <h2 class='font-bold font-primary text-blue text-xl tracking-widest'><a
        href='https://www.pluralsight.com/product/skill-iq' rel='noreferrer'>Skill proficiency IQ</a></h2>
      <p class='font-bold font-primary text-blue mb-4'>Based on skill tests taken on Pluralsight</p>
    </div>
    <div class='flex flex-col md:flex-row'>
      <div class='flex flex-col md:mr-24'>
        <div class='flex flex-row items-center mb-10'>
          <i class='bg-blue mr-6 text-3xl md:text-6xl ball rounded-full flex items-center justify-center'>
            <svg xmlns='http://www.w3.org/2000/svg'
                 width='41'
                 height='46'
                 viewBox='0 0 41 46'>
              <path fill='#FFF'
                    d='M447,3 L443.264785,44.39517 L426.47502,49 L409.731314,44.4017378 L406,3 L447,3 Z M439,12 L413,12 L413.124217,13.3738793 L414.40003,27.4864456 L432.389139,27.4864456 L431.786629,34.1281293 L425.997505,35.6697711 L425.997,35.67 L425.992751,35.6713691 L420.21196,34.1313253 L419.842445,30.0469823 L414.631849,30.0469823 L415.359046,38.0878038 L425.991418,41 L426.015452,40.9935565 L426.015,40.992 L436.638525,38.0878038 L436.716581,37.2227276 L437.936308,23.7405659 L438.062954,22.3652948 L419.147014,22.3652948 L418.67264,17.1212281 L438.535265,17.1212281 L438.639288,15.9700871 L438.875888,13.3738793 L439,12 Z'
                    transform='translate(-406 -3)' />
            </svg>
          </i>
          <span
            class='font-bold font-primary text-blue text-xl tracking-widest'>HTML 5<br> Expert 207</span>
        </div>
        <div class='flex flex-row items-center mb-10'>
          <i class='bg-blue mr-6 text-3xl md:text-6xl ball rounded-full flex items-center justify-center'>
            <svg xmlns='http://www.w3.org/2000/svg'
                 width='46'
                 height='48'
                 viewBox='0 0 46 48'>
              <path fill='#FFF'
                    d='M426.69442,224 L450,231.81435 L446.226436,261.35688 L426.69442,272 L407.467985,261.498336 L404,231.955806 L426.69442,224 Z M427.158116,230 L413,260.911741 L418.288998,260.823482 L421.13153,253.850135 L433.83253,253.850135 L436.944885,260.911741 L442,261 L427.158116,230 Z M427.194237,239.903794 L431.979529,249.719153 L422.98435,249.719153 L427.194237,239.903794 Z'
                    transform='translate(-404 -224)' />
            </svg>
          </i>
          <span
            class='font-bold font-primary text-blue text-xl tracking-widest'>Angular<br> Proficient 160</span>
        </div>
        <div class='flex flex-row items-center mb-10'>
          <i class='bg-blue mr-6 text-3xl md:text-6xl ball rounded-full flex items-center justify-center'>
            <svg xmlns='http://www.w3.org/2000/svg'
                 width='43'
                 height='52'
                 viewBox='0 0 43 52'>
              <path fill='#FFF'
                    d='M766.147261,136.368934 C765.950913,136.169127 765.950913,135.969319 766.147261,135.769512 C766.539883,135.369898 767.030829,135.220042 767.619799,135.319946 C768.208844,135.419849 768.552454,135.519753 768.650628,135.619657 C769.337848,135.919368 770.098735,136.593679 770.933141,137.642744 C771.767546,138.691732 772.43026,139.415995 772.921206,139.81561 C775.277387,141.813683 777.68258,141.963538 780.136935,140.265176 C780.333283,139.565851 780.652387,138.966429 781.094095,138.466834 C781.535804,137.967316 781.953157,137.61773 782.345854,137.417846 C782.738626,137.218038 783.425846,136.918327 784.407588,136.518713 C781.167764,136.219002 778.541642,135.644518 776.52907,134.795337 C774.516499,133.946156 772.921131,132.87223 771.74304,131.573482 C770.172253,129.775217 769.215017,127.427481 768.871407,124.530276 C768.527722,121.63307 768.748652,118.985623 769.534121,116.587936 C770.123166,115.089381 770.957647,113.740759 772.037487,112.541838 C771.252094,110.044247 771.399355,107.196993 772.479271,104 C775.620846,104.199884 778.467898,105.298824 781.020427,107.296897 C785.929137,105.99815 791.034196,105.948198 796.335528,107.147042 C797.022747,106.647523 798.078157,106.023164 799.501608,105.27381 C800.925134,104.524532 802.716851,104.099904 804.876683,104 C805.26938,105.09894 805.539397,106.397687 805.686658,107.896242 C805.83392,109.394797 805.760327,110.793448 805.465804,112.092195 C807.723735,114.489883 808.901826,117.686799 809,121.682945 C809,124.879862 808.460117,127.527308 807.380201,129.625285 C806.300285,131.723261 804.385888,133.471575 801.63701,134.870149 C799.7717,135.769359 797.317345,136.318752 794.273945,136.518559 C795.648459,137.217885 796.654707,137.942225 797.292839,138.691502 C797.931047,139.440779 798.34825,140.614609 798.544673,142.213067 L798.544673,146.933629 L798.691859,151.504183 C798.986382,152.003778 799.330067,152.42833 799.722764,152.778069 C800.115461,153.127732 800.45907,153.377491 800.753593,153.527346 C801.04804,153.677202 801.14629,153.902023 801.04804,154.201734 C800.949866,154.501445 800.557169,154.651301 799.870025,154.651301 C798.200988,154.651301 796.875712,154.051879 795.89397,152.852958 C795.599447,152.35344 795.452186,151.754095 795.452186,151.054693 L795.452186,143.861631 C795.452186,143.062401 795.255838,142.487917 794.863141,142.138254 C794.470444,141.788515 794.077747,141.56377 793.68505,141.463866 L793.68505,150.904761 C793.68505,152.603123 793.881399,153.702063 794.274096,154.201581 C794.666792,154.701099 794.912228,155.200694 795.010477,155.700136 C795.108652,155.800039 795.034983,155.874929 794.789548,155.92488 C794.544188,155.974756 794.12691,155.899943 793.537789,155.700136 C792.261524,155.400425 791.377956,154.726037 790.887085,153.677048 C790.396214,152.62806 790.150779,151.504106 790.150779,150.305262 L790.150779,141.014453 L788.236382,141.014453 L788.236382,150.305492 C788.236382,151.504336 787.990871,152.653305 787.5,153.752168 C786.812856,155.150896 785.536516,155.900096 783.671281,156 C783.376759,155.900096 783.229498,155.800193 783.229498,155.700366 C783.327672,155.600385 783.622194,155.100944 784.113065,154.201811 C784.21124,154.002004 784.333995,153.602389 784.481256,153.002967 C784.628593,152.403546 784.702186,151.70422 784.702186,150.904991 L784.702186,141.46402 C784.309489,141.563923 783.941298,141.788668 783.597688,142.138408 C783.254079,142.488147 783.082236,143.062555 783.082236,143.861784 L783.082236,151.054846 C783.082236,151.754095 782.934975,152.353594 782.640452,152.853112 C781.756884,154.051956 780.431533,154.651454 778.664472,154.651454 C777.977253,154.651454 777.584556,154.501599 777.486382,154.201888 C777.388132,154.002081 777.412714,153.827211 777.56005,153.677355 C777.707387,153.5275 777.928241,153.35263 778.222764,153.152823 C778.517286,152.953016 778.713635,152.803083 778.811809,152.703256 C779.204506,152.403546 779.498953,152.003931 779.695377,151.504413 C779.9899,151.104798 780.063493,150.05581 779.916231,148.357448 C779.76897,146.659086 779.744389,145.560146 779.842563,145.060628 C777.289958,145.959761 774.688417,145.510117 772.037638,143.711929 C771.252245,142.912699 770.466851,141.763731 769.681457,140.265253 C769.092412,139.166236 767.914322,137.867489 766.147261,136.368934 Z'
                    transform='translate(-766 -104)' />
            </svg>

          </i>
          <span
            class='font-bold font-primary text-blue text-xl tracking-widest'>GIT<br />Proficient 143</span>
        </div>
      </div>
      <div class='flex flex-col'>
        <div class='flex flex-row items-center mb-10'>
          <i class='bg-blue mr-6 text-3xl md:text-6xl ball rounded-full flex items-center justify-center'>
            <svg xmlns='http://www.w3.org/2000/svg'
                 width='44'
                 height='50'
                 viewBox='0 0 44 50'>
              <path fill='#FFF'
                    d='M810,0 L805.870045,44.910701 L787.997523,50 L770.125,44.910701 L766,0 L810,0 Z M799.712383,9 L777.544154,9 L776,25.6515693 L776.032067,25.5481128 L794.865318,25.5481128 L794.25111,32.5930075 L788.24223,34.3197457 L782.144549,32.5659118 L781.779477,28.3020262 L776.244203,28.3020262 L777.033547,36.8224076 L788.24223,40 L799.455846,36.8224076 L801,20.0994041 L781.012333,20.0994041 L781.26887,14.5275328 L795.136655,14.5275328 L795.343858,17.7199046 L800.928466,17.7199046 L799.712383,9 Z'
                    transform='translate(-766)' />
            </svg>
          </i>
          <span
            class='font-bold font-primary text-blue text-xl tracking-widest'>JS<br /> Proficient 143</span>
        </div>
        <div class='flex flex-row items-center mb-10'>
          <i class='bg-blue mr-6 text-3xl md:text-6xl ball rounded-full flex items-center justify-center'>
            <svg xmlns='http://www.w3.org/2000/svg'
                 width='43'
                 height='48'
                 viewBox='0 0 43 48'>
              <path fill='#FFF'
                    d='M448,112 L444.081197,155.196176 L426.473292,160 L408.913947,155.203346 L405,112 L448,112 Z M440,120 L414,120 L414.124077,121.469253 L414.360526,124.244783 L414.468215,125.47451 L427.002341,125.47451 L427.002,125.472 L434.32523,125.472041 L433.852332,131.077426 L420.807852,131.077426 L420.931929,132.546678 L421.168377,135.322208 L421.269044,136.551936 L426.983612,136.551936 L426.983612,136.556874 L433.391,136.556 L432.787142,143.643859 L426.997659,145.290903 L426.997,145.295 L426.988295,145.295842 L421.208176,143.648797 L420.838286,139.283017 L415.631731,139.283017 L416.359806,147.878764 L426.992977,151 L427.023411,151 L427.023,150.987 L437.637853,147.883702 L437.715109,146.957703 L438.597,136.556 L438.600036,136.556874 L439.875923,121.469253 L440,120 Z'
                    transform='translate(-405 -112)' />
            </svg>

          </i>
          <span
            class='font-bold font-primary text-blue text-xl tracking-widest'>CSS<br>Expert 245</span>
        </div>

      </div>
    </div>
  </div>
</div>

<Header titleColor='rgb(125 116 190 / 11%)' pageTitleColor='rgb(21, 0, 158)' subtitleColor='#5a1f9f'>
  <svelte:fragment slot='title'>OnlineCurriculumVitaeOnlineCurriculumVitaeOnlineCurriculumVitaeOnlineCurriculumVitae</svelte:fragment>
  <svelte:fragment slot='pageTitle'>Read Online</svelte:fragment>
  <svelte:fragment slot='subtitle'>Check out my CV right here if you'd like</svelte:fragment>
</Header>

<div class='relative overflow-hidden mt-20 mb-6 md:mb-10'>
  <div>
    <h3 style='color: #940094'
        class='font-primary font-bold font-primary pl-3 md:pl-12 pointer-events-none select-none text-base mb-1 md:mb-0 md:text-2xl'>
      EDUCATION HISTORY
    </h3>
  </div>
</div>

<div class="px-3 container content-center m-auto">
<div class='container content-center m-auto'>
  <div class='px-3 flex mb-10 md:mb-10 items-center flex-col md:flex-row'>
    <div>
      <h2 class='font-secondary tracking-tighter leading-6 md:text-3xl text-2xl mb-2 font-extrabold'>
        University of Cape Town
      </h2>
      <div class='font-light font-primary text-base leading-6 tracking-wider'>
        <ul>
          <li>Degree: Bachelor of Commerce specializing in Information Systems</li>
        </ul>
      </div>
      <h2 class='mt-6 font-secondary tracking-tighter leading-6 md:text-3xl text-2xl mb-2 font-extrabold'>
        Quirk Education
      </h2>
      <div class='font-light font-primary text-base leading-6 tracking-wider'>
        <ul>
          <li>Course: Mobile Marketing</li>
          <li>Course: User Experience and Design</li>
          <li>Course: Digital Marketing</li>
          <li>Course: Search Engine Optimisation/</li>
        </ul>
      </div>
      <h2 class='mt-6 font-secondary tracking-tighter leading-6 md:text-3xl text-2xl mb-2 font-extrabold'>
        Red and Yellow
      </h2>
      <div class='font-light font-primary text-base leading-6 tracking-wider'>
        <ul>
          <li>Course: NCIT Management and Leadership Training</li>
        </ul>
      </div>
      <h2 class='mt-6 font-secondary tracking-tighter leading-6 md:text-3xl text-2xl mb-2 font-extrabold'>
        Marburg Secondary School
      </h2>
      <div class='font-light font-primary text-base leading-6 tracking-wider'>
        <ul>
          <li>Exemption: English 1st Language HG - A, Afrikaans 2nd Language HG - A, Biology HG - A
            Business Economics HG - A, Accounting, A Mathematics HG - B.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class='relative overflow-hidden mt-20 mb-6 md:mb-10'>
  <div>
    <h3 style='color: #940094'
        class='font-primary font-bold font-primary pl-3 pointer-events-none select-none text-base mb-1 md:mb-0 md:text-2xl'>
      EMPLOYMENT HISTORY/EXPERIENCE of 10 years
    </h3>
  </div>
</div>
</div>

<Testimonial>
  <svelte:fragment slot='testimonialImage'>
    <source type='image/webp' srcset={pp}>
    <img class='rounded-full' alt='pp' src={ppFallback}>
  </svelte:fragment>
  <svelte:fragment slot='testimonialName'>Frontend Consultant at Passionate People</svelte:fragment>
  <svelte:fragment slot='testimonialTitle'>April 2021 - current</svelte:fragment>
  <svelte:fragment slot='testimonialBlurb'>Ever since I moved to Amsterdam and attended the biggest Angular conference in
    EU I wanted to work for Passionate People, who hosted the conference. Starting a new job during a pandemic
    was daunting but it turned out great. I challenged myself to try something new and started my React journey
    at my client GSTAR raw, a high fashion clothing retailer. At first, I missed the opinionated approach of
    Angular but after a couple of months, I started to see the value of React and even loved JSX. I realised
    that with .js anything is possible and my opinion of frontend frameworks/libraries has changed completely. I
    currently work on the checkout system which we upgraded from 16 to 18. It interfaces with SAP hybris and our
    payment provider, Adyen. I also support the legacy project team which is vanilla js and tons of scss. The
    mix of both legacy and bleeding edge has got me appreciating what we frontend developers have in our toolkit
    these days!
  </svelte:fragment>
  <svelte:fragment slot='testimonialLinks'>
    <a class='font-bold font-primary pr-8' target='_blank' rel='noreferrer'
       href='https://passionatepeople.io/'>Check out PassionatePeople</a>

  </svelte:fragment>
</Testimonial>

<Testimonial>
  <svelte:fragment slot='testimonialImage'>
    <source type='image/webp' srcset={lobster}>
    <img class='rounded-full' alt='pp' src={lobsterFallback}>
  </svelte:fragment>
  <svelte:fragment slot='testimonialName'>Mid-level UI Developer at Lobster Ink</svelte:fragment>
  <svelte:fragment slot='testimonialTitle'>Jan 2019 - April 2021</svelte:fragment>
  <svelte:fragment slot='testimonialBlurb'>My current Role as a UI developer is to enforce standards across the platform
    and create reusable, DRY components. I have also started working on our angular upgrade plan from 6 to 7. I work closely with
    design to ensure pixel perfection and negotiate cross-browser compatible solutions. As a frontend
    developer, we interface with our backend with GraphQL/HTTP so both solutions are built into our app.
    We are currently exploring ngxs for state management. Due to the large scale of our app (now used by
    over a million users) we are pushing for DRY components that follow single/multi-shot transclusion
    principles. I am part of the FrontEnd guild where we plan and upgrade the UI to the highest standard.
    We are currently moving from angular layout to fx-layout to improve performance.
  </svelte:fragment>
  <svelte:fragment slot='testimonialLinks'>
    <a class='font-bold font-primary pr-8' target='_blank' rel='noreferrer'
       href='https://lobsterink.com/'>Check out LobsterInk</a>

  </svelte:fragment>
</Testimonial>

<Testimonial>
  <svelte:fragment slot='testimonialImage'>
    <source type='image/webp' srcset={responsive}>
    <img class='rounded-full' alt='pp' src={responsiveFallback}>
  </svelte:fragment>
  <svelte:fragment slot='testimonialName'>Senior Web Developer/ Tech Lead at Responsive Digital</svelte:fragment>
  <svelte:fragment slot='testimonialTitle'>September- 2017 - December 2018</svelte:fragment>
  <svelte:fragment slot='testimonialBlurb'>I was a technical lead on two major projects for a large corporate client, Old
    Mutual. I ran a 1 year
    internship where I devised a mentorship structure and oversaw the programme. I gave workshops to the
    development team to share my learnings and teach core fundamental knowledge on CSS methodologies
    and frontend tooling. I jumped into the world of Angular and started up-skilling on ES6.</svelte:fragment>
  <svelte:fragment slot='testimonialLinks'>
    <a class='font-bold font-primary pr-8' target='_blank' rel='noreferrer'
       href='https://lobsterink.com/'>Check out LobsterInk</a>

  </svelte:fragment>
</Testimonial>

<div class='relative overflow-hidden mb-6 md:mb-10'>
  <div>
    <h3 style='color: #940094'
        class='text-uppercase font-primary font-bold font-primary pl-3 md:pl-12 pointer-events-none select-none text-base mb-1 md:mb-0 md:text-2xl'>
      Tech exposure
    </h3>
  </div>
</div>

<div class='px-3 m-auto container content-center'>
  <ul>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>HTML5, CSS3</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Jade/Pug, HAML</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>SASS, SCSS, LESS</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>JavaScript</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>React 16+, Angular 6+, jQuery</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>BEM, Atomic SCSS, Material, FxLayout</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>GSAP.js animation library</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Bootstrap, Foundation</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Drupal 7/8</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>MySQL, MariaDB</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>NPM, Gulp, Grunt, Webpack</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Azure DevOps, Pantheon, Circle CI</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>JIRA, Resource Guru, Asana</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Bitbucket, Github</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Linux Arch, Ubuntu, OSX, Windows</li>
    <li class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Adobe creative cloud (PS, BR, LR)</li>
  </ul>
</div>

<div class='relative overflow-hidden mt-20 mb-6 md:mb-10'>
  <div>
    <h3 style='color:#940094'
        class='text-uppercase font-primary font-bold font-primary pl-3 md:pl-12 pointer-events-none select-none text-base mb-1 md:mb-0 md:text-2xl'>
      Honors & Awards during employment
    </h3>
  </div>
</div>

<div class='px-3 container content-center m-auto'>
  <div class='mb-10 md:mb-10 items-center flex-col md:flex-row'>
    <div>
      <h2 class='font-secondary tracking-tighter leading-6 md:text-3xl text-2xl mb-2 font-extrabold'>
        GOLD Award - Standard Bank MMA Smarties Award (Innovation)
      </h2>
      <div class='font-light font-primary text-base leading-6 tracking-wider'>
        <ul>
          <li>Role: Front-end HTML5 and Css3 animations</li>
          <li>Award Entry:
            https://hellojudge.passionfordigital.biz/hungry-lion-bigger-burger-banner/
          </li>
          <li>Case Study: https://www.gottaquirk.com/2014/07/10/the-hungry-lion-bigger-burger-banner/</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class='px-3 container content-center m-auto'>
  <div class='flex mb-10 md:mb-10 items-center flex-col md:flex-row'>
    <div>
      <h2 class='font-secondary tracking-tighter leading-6 md:text-3xl text-2xl mb-2 font-extrabold'>
        Finalist - The Loerie Awards Company (Digital & Interactive - Internet Advertising)
      </h2>
      <div class='font-light font-primary text-base leading-6 tracking-wider'>
        <ul>
          <li>The Loerie Awards Company (September 2014)</li>
          <li>Role: Front-end HTML5 and Css3 animations
          </li>
          <li>Award Entry <a href='https://hellojudge.passionfordigital.biz/hungry-lion-bigger-burger-banner/'>here</a>
          </li>
          <li>Case Study <a href='https://www.gottaquirk.com/2014/07/10/the-hungry-lion-bigger-burger-banner/'>here</a>
          </li>
          <li>Finalists <a href='https://finalists.loeries.com/finalists.aspx?link=awards_finalists'>here</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class='px-3 container content-center m-auto'>
  <div class='flex mb-10 md:mb-10 items-center flex-col md:flex-row'>
    <div>
      <h2 class='font-secondary tracking-tighter leading-6 md:text-3xl text-2xl mb-2 font-extrabold'>
        SILVER Award - The Assegai Awards (Integrated Direct Marketing Campaigns)
      </h2>
      <div class='font-light font-primary text-base leading-6 tracking-wider'>
        <ul>
          <li>The Assegai Awards (November 2014)</li>
          <li>Role: Front-end Engineering</li>
          <li>The Hungry Lion Lucky Bucket/</li>
          <li>The Hungry Lion Lucky Bucket</li>
          <li>Results <a href='https://www.marklives.com/2014/11/assegai-awards-2014-winners/?category=media#.VFyXjvm
						UdkI'>page</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class='px-3 container content-center m-auto'>
  <div class='flex mb-10 md:mb-10 items-center flex-col md:flex-row'>
    <div>
      <h2 class='font-secondary tracking-tighter leading-6 md:text-3xl text-2xl mb-2 font-extrabold'>
        Finalist - 2016 IAB SA Bookmark Awards
      </h2>
      <div class='font-light font-primary text-base leading-6 tracking-wider'>
        <ul>
          <li>IAB SA Bookmark Awards (January 2016)</li>
          <li>Savanna Premium Cider :: Global Website</li>
          <li>Role: Part of the Front-End Development Team + Animations</li>
          <li>GSAP JavaScript animations for Bottle <a href='https://savannacider.com/drylights/new-bottle'>showcase</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class='px-3 container content-center m-auto'>
  <div class='flex mb-10 md:mb-10 items-center flex-col md:flex-row'>
    <div>
      <h2 class='font-secondary tracking-tighter leading-6 md:text-3xl text-2xl mb-2 font-extrabold'>
        Finalist - Hungry Lion – Lucky Bucket Integrated Campaign
      </h2>
      <div class='font-light font-primary text-base leading-6 tracking-wider'>
        <ul>
          <li>IAB BOOKMARKS (January 2015)</li>
          <li>Role: Front-End engineer</li>
          <li>Role: Part of the Front-End Development Team + Animations</li>
          <li>Announcement <a href='https://iabsa.net/news/iab-bookmarks-awards-finalists-announced/'>here</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style lang='scss'>

    .gradient {
        background: linear-gradient(130deg, #940094 30%, #15009E);
        width: 300px;
        height: 300px;
    }

    .force-white {
        -webkit-background-clip: revert;
        background-clip: revert;
        -webkit-text-fill-color: white;
        text-fill-color: white;
    }

    .ball {
        width: 100px;
        height: 100px;
    }

    .mb-10 {
        opacity: 0;
        animation: animation-move-up 3s ease-out;
        animation-fill-mode: forwards;
        top: -20px;
    }

    @keyframes animation-move-up {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            top: 0;
            transform: translateY(0);
        }
    }

</style>
