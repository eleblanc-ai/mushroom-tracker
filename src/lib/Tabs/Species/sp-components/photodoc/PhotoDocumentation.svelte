<script>
    import { Carousel, Thumbnails } from 'flowbite-svelte';
    import images from './mushrooms/images.json';

    let index = 0;

  </script>
  

  
  <div class="max-w-4xl space-y-4">
    <Carousel {images} imgClass="object-contain h-full w-fit rounded-sm" let:Indicators let:Controls bind:index class="rounded-md ring-4 ring-green-500 border-4 border-white dark:border-gray-800 min-h-[320px] bg-gray-200">
      <Indicators class="border border-white rounded-md p-2" />
      <Controls class="items-center text-red-400 dark:text-green-400 pt-4" />
    </Carousel>
    <Thumbnails class="h-[10%] bg-transparent gap-3" let:Thumbnail let:image let:selected {images} bind:index>
      <Thumbnail {...image} {selected} class="rounded-md shadow-xl hover:outline hover:outline-primary-500" activeClass="outline outline-primary-400"/>
    </Thumbnails>
  </div>
  