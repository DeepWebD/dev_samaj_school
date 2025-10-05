import { useState, useEffect, useCallback } from "react";



function ImageGallery() {


  useEffect(()=>{
    window.scrollTo(0,60);
  })
 
  const imageColumns = distributeImages();

  return (
    <main className="min-h-screen  mt-[100px]">
      <section className="sticky top-0 z-10 ">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-extrabold leading-none tracking-normal text-gray-900 md:text-3xl text-center">
            <span className="block w-full text-secondary">
              Captured Moments
            </span>
          </h1>
        </div>
      </section>

      <section className="w-full px-4 py-6">
        <div className="p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sampleImages.map((images, index) => {
              return (
                <div key={index} className="grid gap-4">
                  {images.map((image, index) => {
                    return (
                      <div key={index}>
                        <img
                          className="h-auto max-w-full rounded-lg"
                          src={image.src}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ImageGallery;

