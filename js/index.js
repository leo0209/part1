var wedgit = window.wedgit || {};
wedgit.Run=function(){
  // function Keyover(this,obj){
  //   var x = $(this).find('li').html();
  //   alert(x)
  // }
  // Keyover('.search_key','.search_box')
  
  //身份证输入按钮事件 
  function box(obj,list){
    if(!$(obj).hasClass('btn_del')){
      var x = $(obj).html();
      $(list).val($(list).val()+x);
    }
  }
  function Deltxt(obj){
     var m = $(obj).val().length;
      var y = $(obj).val().substr(0,m-1);
      $(obj).val(y)
  }
  $('.search_key li').on('click',function(){
    box(this,'.search_box .in_txt')
  })

  $('.code_key li').on('click',function(){
    box(this,'.page_infor input.in_txt')
  })

  $('.page_infor input.in_del').on('click',function(){
    Deltxt('.page_infor input.in_txt')
  })
  $('.page_infor input.in_set').on('click',function(){
    $('.page_infor input.in_txt').val('')
  })
  $('.search_key li.btn_del').on('click',function(){
    Deltxt('.search_box .in_txt')
  })

  $('.result_list ul').each(function(i){
    if(i%2==0){
      $(this).css('background','#ffffff')
    }else{
      $(this).css('background','#f5f5f5')
    }
  })
  
  $('.page_falv ul li').on('click',function(e){
    e.preventDefault();
    var x = $(this).find('img').attr('src');
    var html ="<div class='Big_img'>";
    html+="<div class='img_bg'></div> ";
    html+="<div class='img_box'>";
    html+="<a class='img_close' href='javascript:void(0)' title=''></a>";
    html+="<img class='img_src' src='"+x+"' alt=''>";
    html+="</div> </div> ";
    $('.wrap').append(html);
    $('.img_box').css({
      'top':($(window).height()-$('.img_box').height())/2
    })
  })
  $(document).on('click','.Big_img .img_close',function(){
    $('.Big_img').remove()
  })

  $(document).on('click','.page_infor .cell_code label',function(){
    $(this).addClass('on').siblings().removeClass('on')
  })

  var dt = new Date();
  var Year=dt.getFullYear();
  $('.page_infor input.in_year').val(Year)
  $('.page_infor input.in_add').on('click',function(){
    var x = parseInt($('.page_infor input.in_year').val());
    if(x<Year){
      x = x+1;
      $('.page_infor input.in_year').val(x)
    }else{
      $('.page_infor input.in_year').val(Year)
    }
  })

  $('.page_infor input.in_mul').on('click',function(){
    var x = $('.page_infor input.in_year').val();
    if(x>0){
      x = x-1;
      $('.page_infor input.in_year').val(x)
    }else{
      $('.page_infor input.in_year').val(0)
    }
  })
  
  $(function(){
    $('.list_tab li').each(function(i){
      if($(this).hasClass('on')){
        $('.list_txt .txt_con:eq('+i+')').fadeIn(0)
      }
    })
  })
  $('.list_tab li').on('click',function(){
    $(this).addClass('on').siblings().removeClass('on');
    var x = $(this).index();
    $('.list_txt .txt_con').fadeOut(0)
    $('.list_txt .txt_con:eq('+x+')').fadeIn(0)
  })
}
wedgit.Run();
    