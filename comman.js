$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 2,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        //preventDefault: true,
        //ease: 'power4.out',
        //smoothTouch: 0.1,
    });

     

    // smoother.effects("img", { speed: "auto" });

    let headings = gsap.utils.toArray(".js-title").reverse();
    headings.forEach((heading, i) => {
        let headingIndex = i + 1;
        let mySplitText = new SplitText(heading, { type: "chars" });
        let chars = mySplitText.chars;

        chars.forEach((char, i) => {
            smoother.effects(char, { lag: (i + headingIndex) * 0.1, speed: 1 });
        });
    });

    let splitTextLines = gsap.utils.toArray(".js-splittext-lines");

    splitTextLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                duration: 2,
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
                // toggleActions: 'play none play reset'
            },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        // tl.from(itemSplitted.lines, { y: 100, delay: 0.2, opacity: 0, stagger: 0.1, duration: 1, ease: 'inOut' });
        // tl.from(itemSplitted.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 1, ease: 'back.inOut' });
        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.5,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });
});



$(function () {
  // Initialize form validation
  $("#inquiry-forms-two").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      number: {
        required: true,
      },
      subject: {
        required: true,
      },
      message: {
        required: true,
      },
      captcha: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Please enter your Name",
      },
      email: {
        required: "Please enter your Email",
      },
      number: {
        required: "Please enter your Number",
      },
      subject: {
        required: "Please enter your Subject",
      },
      message: {
        required: "Please enter your Messages",
      },
      captcha: {
        required: "Please enter Captcha",
      },
    },
    submitHandler: function (form) {
      form.submit();
      const loginBtn = document.getElementById("login-btn");

      loginBtn.addEventListener("click", () => {
        // Show loader on button click
        loginBtn.classList.add("loading");
        // Hide loader after success/failure - here it will hide after 2 seconds
        setTimeout(() => loginBtn.classList.remove("loading"), 3000);
      });
    },
  });

  // Reset form and validation when the modal is closed
  $("#exampleModalCenter").on("hidden.bs.modal", function () {
    const $form = $("#inquiry-forms-two");

    // Reset form fields
    $form[0].reset();

    // Reset validation states
    $form.validate().resetForm(); // Removes error messages
    $form.find(".is-valid, .is-invalid").removeClass("is-valid is-invalid"); // Removes Bootstrap validation classes
  });
});



  $(function () {
    $("#contact-forms").validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true
        },
        number: {
          required: true,
        },
        subject: {
          required: true,
        },       
        message: {
          required: true,
        },
        captcha: {
          required: true,
        },
      },
      // Specify validation error messages
      messages: {
        name: {
          required: "Please enter your Name",
        },
        email: {
          required: "Please enter your Email",
        },
        number: {
          required: "Please enter your Number",
        },
        subject: {
          required: "Please enter your subject",
        },  
        message: {
          required: "Please enter your Messages",
        },
        captcha: {
          required: "Please enter Captcha",
        },
  
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function (form) {
        form.submit();
        const loginBtn = document.getElementById("login-btn");
  
        loginBtn.addEventListener('click', () => {
          // Show loader on button click
          loginBtn.classList.add("loading");
          // Hide loader after success/failure - here it will hide after 2seconds
          setTimeout(() => loginBtn.classList.remove("loading"), 3000);
        });
      }
    });
  });