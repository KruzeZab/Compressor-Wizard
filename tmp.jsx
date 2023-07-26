{
  /* Start Button */
}
<div>
  <button
    type="button"
    class="bg-green-500 p-2 font-medium text-white text-lg rounded-md hover:bg-green-600 transition-all duration-2 tracking-wide flex items-center justify-center space-x-1 uppercase"
  >
    <span>Start</span>
    <span>
      <MdArrowForwardIos fontSize="18px" />
    </span>
  </button>
</div>;

{
  /* Uploading Progress bar */
}
<div className="bg-white rounded-lg p-3 px-4 flex gap-2 flex-col">
  <div className="flex items-center gap-2">
    <div>
      <FaSpinner fontSize="18px" className="animate-spin" />
    </div>
    <span className="font-medium">File:</span> test.pdf
  </div>

  <div className="w-full self-start">
    <div className="bg-gray-200 rounded-full h-2">
      <div className="bg-green-500 rounded-full h-2 w-1/2" />
    </div>
  </div>
</div>;

{
  /* Compression Options */
}
<div className="flex flex-col space-y-4 mb-2">
  <label htmlFor="bestQuality" className="bg-white rounded-lg">
    <div className="flex items-start bg-white p-3 px-4 leading-3 space-x-4">
      <input type="radio" name="" id="bestQuality" />
      <div className="">
        <h4 className="font-medium mb-2.5">Best Quality</h4>
        <p className="text-sm">No Visual Difference</p>
      </div>
    </div>
  </label>

  <label htmlFor="bestQuality" className="bg-white rounded-lg">
    <div className="flex items-start bg-white p-3 px-4 leading-3 space-x-4">
      <input type="radio" name="" id="bestQuality" />
      <div>
        <h4 className="font-medium mb-2.5">Smallest File</h4>
        <p className="text-sm">Tiny File Size</p>
      </div>
    </div>
  </label>

  {/* Choose custom option */}
  <label htmlFor="bestQuality" className="bg-white rounded-lg">
    <div className="flex items-start bg-white p-3 px-4 leading-3 space-x-4">
      <input type="radio" name="" id="bestQuality" />
      <div>
        <h4 className="font-medium mb-2.5">Custom</h4>
        <p className="text-sm mb-3.5">
          Decide which quality the resulting image should have. The
          better the quality, the higher the file size. A lower
          quality will thus also reduce the file size.
        </p>

        {/* Range slider */}
        <div class="relative">
          <div class="flex justify-between mb-2">
            <h4 class="text-sm font-medium">Best Quality</h4>
            <h4 class="text-sm font-medium">Best Compression</h4>
          </div>
          <input
            type="range"
            id="rangeInput"
            min="0"
            max="10"
            step="1"
            class="w-full rounded-lg appearance-none h-4 focus:outline-none cursor-pointer mb-2 bg-purple-400"
          />
          <div class="flex justify-between">
            <span class="text-xs">0</span>
            <span class="text-xs">1</span>
            <span class="text-xs">2</span>
            <span class="text-xs">3</span>
            <span class="text-xs">4</span>
            <span class="text-xs">5</span>
            <span class="text-xs">6</span>
            <span class="text-xs">7</span>
            <span class="text-xs">8</span>
            <span class="text-xs">9</span>
            <span class="text-xs">10</span>
          </div>
        </div>
      </div>
    </div>
  </label>

  {/* Compression Button */}
</div>;
