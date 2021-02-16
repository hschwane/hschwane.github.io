---
layout: page
title: GraSPH
description: Interactive simulation of star formation
img: 
importance: 1
---

For my bachelor thesis, I developed a code to simulate star formation interactively. 
It simulates a gas cloud using [Smoothed Particle Hydrodynamics](https://en.wikipedia.org/wiki/Smoothed-particle_hydrodynamics). 
All particles attract each other by gravity. To reach interactive speeds with a simulation model form astrophiscs, most calculations are performed on the GPU.
I used OpenGL compute shader for the simulation and the OpenGL rendering pipeline for visualization. In addition many parameters exist to tune accuracy against speed. Since the simulation is rendered in 3D while it is running, the user can fly around the gas cloud using the W,A,S,D-keys, similar to a video game. 

You can download my thesis [here](https://kola.opus.hbz-nrw.de/frontdoor/index/index/docId/1638), to read up on the deatail. It is however written in german.

If you want to try the full experience, you can download the code from the [github repository](https://github.com/hschwane/GraSPH) and compile it for your machine. 
Alternatively check out this youtube video, which was screen-captured on a consumer grade laptop:
<iframe style="width: 100%; padding-top: 56.25%;" src="https://www.youtube-nocookie.com/embed/PUyE3j0aoMw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

After finishing my thesis, I continued working on the code as part of my job as a research assistant at the [Max Planck Institute for Astronomy](http://www.mpia.de/en). It extended to simulate planet formation and became [GraSPH2](/projects/GraSPH2). 

While it could never rival supercomputer simulations desgined for pyhsics simulation in resolution or accuracy, it was still verry useful to our research group. It was quick to change settings or implement a new feature and then run a simulation with immedite feedback. The quick turn-around time allows what I call rapid prototyping for scientific simulations. It resulted in the testing of many different settings over the course of one creative, but verry late evening. Probably best described as the physics equivalent to a hackathon. Something not possible at all with a simulation code, that needs a few houres or days to run in a remote supercomputing center 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/1.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/3.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/5.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/5.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal it's glory in the next row of images.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/6.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/11.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/" target="_blank">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/6.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/11.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
```
