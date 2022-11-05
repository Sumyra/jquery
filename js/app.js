

    //let hidebtn = $(".hide")
    //let box = $(".box")
    //let showbtn = $('.show')
    //let togglebtn = $('.toggle')
    //hidebtn.click(function(){
        //box.hide(200)

    //})
    //showbtn.click(function(){
        //box.show(200)
    //})
    //togglebtn.click(function(){
        //box.toggle(200)
    //})
    $(function(){
      let searchIcon = $(".searchIcon")
      let searchArea =$('.searchArea')
      let crossIcon = $('.crossIcon')
   

      searchIcon.click(function(){
        searchArea.slideDown(200)

      })
      crossIcon.click(function(){
        searchArea.fadeOut(200)
      })
       

    })