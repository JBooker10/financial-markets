<template>
  <div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <h2>{{headline}}</h2>
            <div class="modal-body">
              <!-- <img
                src="https://s.yimg.com/ny/api/res/1.2/eL3qxoQKy9MsWlfQfjFPkQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTI4MDtoPTk2MA--/https://media.zenfs.com/en/simply_wall_st__316/babdc8e74b7ed9296976e432107fd772"
                class="images"
              >-->
              <p class="summary highlight">{{summary}}</p>
            </div>
            <div class="modal-footer">
              <button @click="isOpen=!isOpen" class="strip btn-news">Close</button>
              <!-- <a :href="url" target="_blank" class="btn-news">Learn More</a> -->
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  name: "Modal",
  props: { isOpen: Boolean, summary: String, headline: String, url: String }
};
</script>
<style scoped>
.modal {
  width: 425px;
  margin: 0px auto;
  padding: 20px;
  background: #14171cf1;
  border-radius: 3px;
  box-shadow: 0 2px 8px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}

.summary {
  text-align: justify;
}

.images {
  display: block;
  margin: 2em auto;
  width: 100%;
}

.strip {
  padding: none;
}

.modal-body {
  padding: 2em;
}

.modal-footer {
  padding: 1em;
}

.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
</style>