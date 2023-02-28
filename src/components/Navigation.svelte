<script lang='ts'>
  let isActive = false;
  const showNav = (): boolean => {
    requestAnimationFrame(() => window.scrollTo(0,0));
    return isActive = !isActive;
  };
</script>

<a href='/'>
  <div class='logo fixed font-secondary flex items-center pt-6 pl-4 cursor-pointer z-10 outline-none'>
    <i class='bg-blue text-4xl overflow-hidden w-1/4 h-10 text-white font-extrabold rounded-full inline-block'>K</i><span
    class='text-blue text-2xl tracking-tight'>apeesh</span>
  </div>
</a>

<nav class='nav block absolute rounded-full cursor-pointer' on:keypress={showNav} on:click={showNav} class:active='{isActive}'>
  <div class='line'></div>
  <div class='line'></div>
  <div class='line'></div>
</nav>
<div class={isActive ? 'full-screen block' : 'flex justify-around items-center flex overflow-hidden hidden-wrapper fixed'}>
  <div id='circlesContainer' class='circles-container overflow-hidden' class:active='{isActive}'></div>
  <div class='nav-items flex flex-col justify-center md:justify-start font-secondary'>
    <h5 class='font-secondary font-bold text-center mt-20 hidden md:block'>Front End Developer</h5>
    <h2 class='font-secondary font-bold text-6xl text-center mb-24 leading-10 hidden md:block'>
      <strong>Kapeesh</strong></h2>
    <a href='/' on:keypress={showNav} on:click={showNav} class='text-3xl text-center mb-4'>Home</a>
    <a href='/cv' on:keypress={showNav} on:click={showNav} class='text-3xl text-center mb-4'>Download CV</a>
    <a href='/portfolio' on:keypress={showNav} on:click={showNav} class='text-3xl text-center mb-4'>Portfolio</a>
    <a href='/testimonials' on:keypress={showNav} on:click={showNav} class='text-3xl text-center mb-4'>Testimonials</a>
    <a href='/about' on:keypress={showNav} on:click={showNav} class='text-3xl text-center mb-4'>About</a>
    <a href='/contact' on:keypress={showNav} on:click={showNav} class='text-3xl text-center mb-4'>Contact</a>
  </div>
</div>

<style lang='scss'>
    .hidden-wrapper {
        display: none;

        &.block {
            display: block;
        }
    }

    .full-screen {
        height: 100% !important;
    }

    .logo {
        @media screen and (max-width: 768px) {
            display: none;
        }

        i {
            font-style: normal;
            width: 46px;
            height: 46px;
            font-size: 53px;
            text-align: center;
            line-height: 50px;
        }
    }

    .nav {
        width: 70px;
        height: 70px;
        background: theme('colors.blue');
        z-index: 9;
        right: 30px;
        top: 30px;
        position: fixed;
        overflow: hidden;

        .line {
            width: 60%;
            margin: 0 auto;
            height: 4px;
            position: relative;
            background: #fff;
            transition: 400ms all ease-out;

            &:nth-child(1) {
                top: 20px;
            }

            &:nth-child(2) {
                top: 30px;
            }

            &:nth-child(3) {
                top: 40px;
            }
        }

        &.active {
            .line {
                &:nth-child(1) {
                    transform: rotate(45deg);
                    top: 35px;
                }

                &:nth-child(2) {
                    display: none;
                }

                &:nth-child(3) {
                    transform: rotate(-45deg);
                    top: 31px;
                }
            }
        }

        @media screen and (max-width: 768px) {
            transform: scale(0.65);
            top: 3px;
            right: 10px;
        }
    }

    .nav-items {
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        position: relative;
        z-index: 2;
        opacity: 0;
        color: #FCFFD1;
        animation: fade-in 250ms ease-out;
        animation-fill-mode: forwards;
        @media screen and (max-width: 768px) {
            background: linear-gradient(theme('colors.blue'), theme('colors.purple'));
        }

        a {
            color: #FCFFD1 !important;
            background: none;
            transition: opacity 200ms linear;
            -webkit-background-clip: initial;
            -webkit-text-fill-color: #FCFFD1;
            background-size: auto;
            background-position: 100%;

            &:hover {
                opacity: .7;
            }

            &.nav-active {
                background-position: 0 100%;
                font-weight: 800;
                text-decoration: underline;
                font-family: 'Merriweather Sans', sans-serif;
            }
        }
    }

    .full-screen {
        overflow: hidden;
        height: 100vh;
        z-index: 8;

        &.fixed {
            position: fixed !important;
        }
    }

    .circles-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        display: none;
        background-color: theme('colors.blue');
        filter: blur(10px);

        &.active {
            opacity: 0;
            animation: fade-in 250ms linear;
            animation-fill-mode: forwards;
            display: block;
        }
    }


    @keyframes fade-in {
        0% {
            opacity: 0;

        }
        100% {
            opacity: 1;
        }
    }
</style>
