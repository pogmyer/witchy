const field01 = document.getElementById("field01")
const original = document.getElementById("original")

field01.addEventListener("input", amazing) // create a function below to use for "amazing"

function amazing() {
    if (field01.value) {
        original.innerText = field01.value + " is great!"
    } else {
        original.innerText = "Please enter a name."
    }
}


/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */


const ipsums = [
    {
      title: '<a href="gebi.html">getElementById("")</a>',
      content: '<a href="gebi.html">addEventListener("")</a> <span class="indent">|</span> <span class="indent"><a href="gebi.html">.innerText</a></span>',
    },
    {
      title: '<a href="numtwo.html">C</a>',
      content: '<a href="numtwo.html">Crop circles are Chuck Norris way of .</a>',
    },
    {
      title: 'CH',
      content: 'Blue castello lancashire paneer.',
    },
    {
      title: 'Lops',
      content: 'Lorem ipsum dolor sit amet, consectetur a. ',
    },
    {
      title: 'Lor',
      content: 'Lor rr',
    },
    {
      title: 'Sit',
      content: 'sit xx',
    },
    {
      title: 'Zr',
      content: 'Lor rr',
    },
    {
      title: 'It',
      content: 'sit xx',
    }
  ];
  
  const updateAccordian = (e) => {
    $('.tabs__tab').removeAttr('id');
  
    $(e.target).attr('id', 'tabs--active');
  
    accordianText();
  };
  
  const accordianText = () => {
    const index =  $('#tabs--active').val();
    const info = ipsums[index];
  
    $('.accordian__content-box').html(
      `
        <h3 class="accordian__title">${info.title}</h3>
        <p class="accordian__content">${info.content}</p>
      `
    );
  }
  
  // on page load
  accordianText();
  
  $('.tabs__tab').on('click', updateAccordian);