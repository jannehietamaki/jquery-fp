(function(jQuery) {
    jQuery.fn.extend({
        getOrElse: function(defaultValue) {
            var value = this.get(0);
            return value==document ? defaultValue : value;
        },
        foldLeft: function(value, func) {
            for(var index in this.get()) {
                value = func.call(this, value, this.get(index));
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
        exists: function(func) { return this.filter(func).size() > 0; },
        forall: function(func) { return this.filter(func).size() == this.size(); },
        take: function(count) { return this.slice(0, count).get(); }, 
        drop: function(first) { return this.slice(first).get(); },
        takeWhile: function(func) { 
             var ret = [];
             for(var index in this.get()) {
                var item = this.get(index);
                if (!func.call(item))return ret;
                ret.push(item);
             }
             return ret;
        },
        dropWhile: function(func) { 
             var ret = [];
             var matched = false;
             for(var index in this.get()) {
                var item = this.get(index);
                if (!matched && func.call(item)) {
                     matched = true;
                }
                if(matched) {
                     ret.push(item);
                }
             }
             return ret;
	},
        groupBy: function(func) {
             var ret = {};
             for(var index in this.get()) {
                var item = this.get(index);             
                var group = func.call(item);
                var elems = ret[group];
                if (elems == null) {
                    ret[group] = [item];
                } else {
                    ret[group].push(item);
                }
             }
             return ret;
        }
    });
})(jQuery);
