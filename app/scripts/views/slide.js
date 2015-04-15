define(['backbone', 'helpers'], function(Backbone, Helpers) {
  var Slide = Backbone.View.extend({

    className: 'slide',

    render: function() {
      
      var contentType = this.getContentType();      

      this['render' + Helpers.capitalize(contentType)]();

      return this;
    },

    getContentType: function() {
      if (this.model.get('image')) {
        return 'image';
        this.renderImage();
      } else if (this.model.get('snippet')) {
        return 'snippet';
        this.renderSnippet();
      } else if (this.model.get('quote')) {
        return 'quote';
        this.renderQuote();
      } else if (this.model.get('bullets')) {
        return 'bullets';
        this.renderBullets();
      } else {
        return 'heading';
        this.renderHeading();
      }
    },

    renderImage: function() {
      this.$el
        .addClass('image')
        .append('<img src="' + this.model.get('image') + '"  lt="" />');
    },

    renderSnippet: function() {
      var self = this;
      var snippet = this.model.get('snippet');

      this.$el.addClass('snippet');

      if(this.model.get('title')) {
        this.renderHeading();
      }

      // 对象
      if($.isPlainObject(snippet)) {
        return _.each(snippet, function(snippetPath, heading) {
          self.setSnippet(snippetPath, heading);
        });
      }

      // 字符串
      self.setSnippet(snippet);

    },

    // 
    setSnippet: function(snippetPath, heading) {
      var self = this;

      // get the snippets
      $.get(snippetPath, function(snippet) {
        self.$el
          .append('<pre class="prettyprint">' + _.escape(snippet) + '</pre>');

        prettyPrint();
      });
    },

    renderQuote: function() {
      this.$el
        .addClass('quote')
        .append([
          '<figure>',
            '<blockquote>',
              this.model.get('quote'),
            '</blockquote>',
            '<figcaption>',
              '<cite>',
                this.model.get('cite'),
              '</cite>',
            '</figcaption>',
          '</figure>'
        ].join(''));
        // .append('<blockquote>' + this.model.get('quote') + '</blockquote>')
    },

    renderBullets: function() {
      var el = this.$el;

      el.addClass('bullets');

      if (this.model.get('title')) {
        el.append('<h1>' + this.model.get('title') + '</h1>');
      }

      el.append([
        '<ul>',
        '<li>' + this.model.get('bullets').join('</li><li>'),
        '</ul>'
      ].join(''));
    },

    renderHeading: function() {
      this.$el.append(
        '<h1 class=' + this.model.get('size') + '>' + this.model.get('title') + '</h1>'
      );
    }

  });


  return Slide;
});