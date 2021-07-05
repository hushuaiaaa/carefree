$(function (){
    //区域
    $('.hu li').on({
        touchstart: function (){
            $(this).children('span').css('color','#FFA323')
            $(this).siblings().children('span').css('color','#666767')
        }
    })
    $('.yu p').on({
        touchstart: function (){
            $(this).addClass('pa')
            $(this).siblings().removeClass('pa')
        }
    })
    $('.jin p').on({
        touchstart:function (){
            $(this).css('color','#FFA323')
            $(this).siblings().css('color','#666767')
        }
    })
    $('.jia p').on({
        touchstart:function (){
            $(this).css('color','#FFA323')
            $(this).siblings().css('color','#666767')
        }
    })
                //区域隐藏现实
    $('.hu li').eq(0).on({
        touchstart: function (){
            $('.qu').toggle()
            $('.gee').hide()
            $('.fang').hide()
            $('.geng').hide()
        }
    })


    //价格
    $('.hu li').eq(1).on({
        touchstart: function (){
            $('.gee').toggle()
            $('.qu').hide()
            $('.fang').hide()
            $('.geng').hide()
        }
    })
    $('.gee p').on({
        touchstart: function (){
            $(this).addClass('col')
            $(this).siblings().removeClass('col')
        }
    })

    //房型
    $('.hu li').eq(2).on({
        touchstart: function (){
            $('.fang').toggle()
            $('.gee').hide()
            $('.qu').hide()
            $('.geng').hide()

        }
    })

    $('.fang p').on({
        touchstart: function(){
            $(this).children('a').addClass('aa')
            $(this).siblings().children('a').removeClass('aa')
        }
    })


    //更多
    $('.hu li').eq(3).on({
        touchstart: function (){
            $('.geng').toggle()
            $('.gee').hide()
            $('.qu').hide()
            $('.fang').hide()

        }
    })
    $('.shi p').on({
        touchstart: function (){
            $(this).addClass('pp')
            $(this).siblings().removeClass('pp')
        }
    })


})