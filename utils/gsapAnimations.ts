import gsap from 'gsap'

export default function () {
  let animationVolunteer = null
  let animationGardener = null

  onMounted(() => {
    const elementVolunteer = document.getElementById('helperFlower')
    const elementGardener1 = document.getElementById('gardenerFlower1')
    const elementGardener2 = document.getElementById('gardenerFlower2')
    if (elementVolunteer) {
      // Add the paused parameter to delay the animation start
      animationVolunteer = gsap.timeline({ paused: true })
      animationVolunteer.to(elementVolunteer, {
        rotation: '+=15',
        duration: 0.3,
        ease: 'power1.out',
        transformOrigin: '50% 100%'
      })
      animationVolunteer.to(elementVolunteer, {
        rotation: '0',
        duration: 4,
        ease: 'elastic.out(1, 0.2)',
        delay: 0,
        transformOrigin: '50% 100%'
      })
    }
    if (elementGardener1 && elementGardener2) {
      animationGardener = gsap.timeline({ paused: true })
      animationGardener.to(elementGardener1, {
        rotation: '-=12',
        duration: 1.4,
        ease: 'power2.out',
        transformOrigin: '50% 100%'
      })
      animationGardener.to(elementGardener1, {
        rotation: '0',
        duration: 4,
        ease: 'elastic.out(1, 0.5)',
        delay: 0,
        transformOrigin: '50% 100%'
      })
      animationGardener.to(elementGardener2, {
        rotation: '-=10',
        duration: 1.4,
        ease: 'power2.out',
        delay: -5.2,
        transformOrigin: '50% 100%'
      })
      animationGardener.to(elementGardener2, {
        rotation: '0',
        duration: 4,
        ease: 'elastic.out(1, 0.5)',
        delay: -3.8,
        transformOrigin: '50% 100%'
      })
    }
  })

  function animateVolunteer () {
    if (animationVolunteer && !animationVolunteer.isActive()) {
      // Don't forget to add the 0 parameter to start from the beginning
      animationVolunteer.play(0)
    }
  }

  function animateGardener () {
    if (animationGardener && !animationGardener.isActive()) {
      // Don't forget to add the 0 parameter to start from the beginning
      animationGardener.play(0)
    }
  }

  return { animateVolunteer, animateGardener }
}
