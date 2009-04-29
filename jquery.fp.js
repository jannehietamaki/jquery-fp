(function(jQuery) {
    jQuery.fn.extend({
        getOrElse: function(defaultValue) {
            var value = this.get(0);
            return value==document ? defaultValue : value;
        },
        foldLeft: function(value, func) {
            for(var item in this.get()) {
                value = func.call(this, value, this.get(item));
            }
            return value;
        },
        foldRight: function(value, func){	        
            for(var item in this.get()) {
                var index = this.size()-1-item;
                value = func.call(this, value, this.get(index));
            }
            return value;
        },
        reverse: [].reverse,
        head: function() { return this.get(0); },
        tail: function() { return this.slice(1); },
        exists: function(func) { return this.filter(func).size()>0; }
    });
})(jQuery);