
$(function() {

  describe('RSS Feeds', function() {
    /*测试allFeeds变量是否声明并且不为空*/
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* 测试allFeeds变量中的url 是否声明并且不为空*/
    it('URL defined', function() {
      for (const value of allFeeds) {
        expect(value.url).toBeDefined();
        expect(value.url.length).not.toBe(0);
      }
    });


    /* 测试allFeeds变量中的name 是否声明并且不为空 */
    it('name defined', function() {
      for (const value of allFeeds) {
        expect(value.name).toBeDefined();
        expect(value.name.length).not.toBe(0);
      }
    });
  });


  describe('The menu', function() {
    var ut, alist;
    beforeEach(function() {
      ut = $(".menu-icon-link");
      alist = $("body").attr("class");
    })
    afterEach(function() {
      ut = null;
      alist = null;
    })
    /*测试菜单默认是否为隐藏 */
    it('menu default', function() {
      expect(alist).toContain("menu-hidden");
    });

    /* 测试 当点击图标的时候菜单是否显示，再次点击的时候是否隐藏 */
    it('menu click', function() {
      ut.trigger("click");
      alist = $("body").attr("class");
      expect(alist).not.toContain("menu-hidden");
      ut.trigger("click");
      alist = $("body").attr("class");
      expect(alist).toContain("menu-hidden");
    })
  });
  describe('Initial Entries', function() {
    /* 测试 loadFeed 函数被调用而且工作正常 */
    var _html;
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      })
    });
    it('test loader', function(done) {
      _html = $(".feed").find(".entry").length;
      expect(_html>0).toBe(true);
      done();
    })

  });
  describe('New Feed Selection', function() {
    /* 测试保证当用 loadFeed 函数加载一个新源的时候内容会真的改变。 */
     var _html1;
     var _html2;
     beforeEach(function(done) {
       loadFeed(0, function() {
         _html1 = $(".feed").html();
       });
       loadFeed(1,function(){
         _html2 = $(".feed").html();
         done();
       });
     });
     it('test new loader', function(done) {

       expect(_html1).not.toEqual(_html2);
       done()
     })
  });
}());
