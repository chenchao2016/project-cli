<template>
  <div class="el-autocomplete" v-clickoutside="close">
    <el-input
      ref="input"
      v-bind="$props"
      @compositionstart.native="handleComposition"
      @compositionupdate.native="handleComposition"
      @compositionend.native="handleComposition"
      @change="handleChange"
      @focus="handleFocus"
      @keydown.up.native.prevent="highlight(highlightedIndex - 1)"
      @keydown.down.native.prevent="highlight(highlightedIndex + 1)"
      @keydown.enter.native="handleKeyEnter"
      @keydown.native.tab="close"
    >
      <template slot="prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template slot="append" v-if="$slots.append">
        <slot name="append"></slot>
      </template>
    </el-input>
    <el-button  type="default" :class='triggerButtonClass' @click.native='handleclickOfmine' >{{triggerButton}}</el-button>
    <el-autocomplete-suggestions
      :props="props"
      :class="[popperClass ? popperClass : '']"
      ref="suggestions"
      :suggestions="suggestions"
    >
    </el-autocomplete-suggestions>
  </div>
</template>
<script>
  import ElInput from 'element-ui/packages/input';
  import ElButton from 'element-ui/packages/button';
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import ElAutocompleteSuggestions from './autocomplete-suggestions.vue';
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElAutocomplete',

    mixins: [Emitter],

    componentName: 'ElAutocomplete',

    components: {
      ElInput,
      ElButton,
      ElAutocompleteSuggestions
    },

    directives: { Clickoutside },

    props: {
      props: {
        type: Object,
        default() {
          return {
            label: 'value',
            value: 'value'
          };
        }
      },
      popperClass: String,
      placeholder: String,
      disabled: Boolean,
      name: String,
      size: String,
      value: String,
      autofocus: Boolean,
      fetchSuggestions: Function,
      triggerOnFocus: {
        type: Boolean,
        default: true
      },
      triggerOnButton:{
        type: Boolean,
        default: false
      },
      triggerButton:{
        type: String,
        default: "搜索"
      },
      triggerButtonClass:String,
      customItem: String,
      icon: String,
      onIconClick: Function
    },
    data() {
      return {
        activated: false,
        isOnComposition: false,
        suggestions: [],

        showSuggestion:false,
        loading: false,
        highlightedIndex: -1
      };
    },
    computed: {
      suggestionVisible() {
        const suggestions = this.suggestions;
        let isValidData = Array.isArray(suggestions) && suggestions.length > 0;
        return (isValidData || this.loading) && this.activated;
      }
    },
    watch: {
      suggestionVisible(val) {
        this.broadcast('ElAutocompleteSuggestions', 'visible', [val, this.$refs.input.$refs.input.offsetWidth]);
      }
    },
    methods: {
  
      getData(queryString) {
        this.showSuggestion = true;
        console.log(queryString)
        this.loading = true;
        this.fetchSuggestions(queryString, (suggestions) => {
          this.loading = false;
          if (Array.isArray(suggestions)) {
            this.suggestions = suggestions;
          } else {
            console.error('autocomplete suggestions must be an array');
          }
        });
      },
      handleComposition(event) {
        if (event.type === 'compositionend') {
          this.isOnComposition = false;
          this.handleChange(this.value);
        } else {
          this.isOnComposition = true;
        }
      },
      handleChange(value) {
        this.$emit('input', value);
        if (this.isOnComposition || (!this.triggerOnFocus && !value) || this.triggerOnButton) {
          this.suggestions = [];
          return;
        }
        console.log('listen input !');
         this.getData(value);
      },
      handleFocus() {
        this.activated = true;
        console.log('focus')
        if (this.triggerOnFocus&&!this.triggerOnButton) {
          this.getData(this.value);
          console.log('enter')
        }
      },
      handleclickOfmine(){
        this.getData(this.value);
        this.$refs.input.$refs.input.focus();
      },
      close(e) {
        this.activated = false;
      },
      handleKeyEnter(e) {
        if (this.suggestionVisible && this.highlightedIndex >= 0 && this.highlightedIndex < this.suggestions.length) {
          e.preventDefault();
          this.select(this.suggestions[this.highlightedIndex]);
        }
      },
      select(item) {
        this.$emit('input', item[this.props.value]);
        this.$emit('select', item);
        this.$nextTick(_ => {
          this.suggestions = [];
        });
      },
      highlight(index) {
        if (!this.suggestionVisible || this.loading) { return; }
        if (index < 0) index = 0;
        if (index >= this.suggestions.length) {
          index = this.suggestions.length - 1;
        }
        const suggestion = this.$refs.suggestions.$el.querySelector('.el-autocomplete-suggestion__wrap');
        const suggestionList = suggestion.querySelectorAll('.el-autocomplete-suggestion__list li');

        let highlightItem = suggestionList[index];
        let scrollTop = suggestion.scrollTop;
        let offsetTop = highlightItem.offsetTop;

        if (offsetTop + highlightItem.scrollHeight > (scrollTop + suggestion.clientHeight)) {
          suggestion.scrollTop += highlightItem.scrollHeight;
        }
        if (offsetTop < scrollTop) {
          suggestion.scrollTop -= highlightItem.scrollHeight;
        }

        this.highlightedIndex = index;
      }
    },
    mounted() {
      this.$on('item-click', item => {
        this.select(item);
      });
    },
    beforeDestroy() {
      this.$refs.suggestions.$destroy();
    }
  };
</script>
