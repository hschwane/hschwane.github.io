---
layout: page
title: GraSPH
description: Interactive simulation of star formation
img: /assets/img/GraSPH/01.png
importance: 1
---

For my bachelor thesis, I developed a code to simulate star formation interactively. 
It simulates a gas cloud using [Smoothed Particle Hydrodynamics](https://en.wikipedia.org/wiki/Smoothed-particle_hydrodynamics). 
All particles attract each other by gravity. To reach interactive speeds with a simulation model form astrophiscs, most calculations are performed on the GPU.
I used OpenGL compute shader for the simulation and the OpenGL rendering pipeline for visualization. In addition many parameters exist to tune accuracy against speed. Since the simulation is rendered in 3D while it is running, the user can fly around the gas cloud using the W,A,S,D-keys, similar to a video game. 

You can download my thesis [here](https://kola.opus.hbz-nrw.de/frontdoor/index/index/docId/1638), to read up on the deatail. It is however written in german.

If you want to try the full experience, you can download the code from the [github repository](https://github.com/hschwane/GraSPH) and compile it for your machine. 
Alternatively check out this youtube video, which was screen-captured on a consumer grade laptop:
<div><div cookie-consent="functionality" style="position:relative; padding-top:56.25%; background-color: grey;">
    <iframe style="width: 100%; height: 100%;" src="https://www.youtube-nocookie.com/embed/PUyE3j0aoMw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    You have to enable functional cookies in your cookie preferences below, to view the youtube video. Or view on [youtube](https://youtu.be/PUyE3j0aoMw)
</div></div>

After finishing my thesis, I continued working on the code as part of my job as a research assistant at the [Max Planck Institute for Astronomy](http://www.mpia.de/en). It extended to simulate planet formation and became [GraSPH2](/projects/GraSPH). 

While it could never rival supercomputer simulations desgined for pyhsics simulation in resolution or accuracy, it was still verry useful to our research group. It was quick to change settings or implement a new feature and then run a simulation with immedite feedback. The quick turn-around time allows what I call rapid prototyping for scientific simulations. It resulted in the testing of many different settings over the course of one creative, but verry late evening. Probably best described as the physics equivalent to a hackathon. Something not possible at all with a simulation code, that needs a few houres or days to run in a remote supercomputing center 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/06.png' | relative_url }}" alt="" title="star formation simulation"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/07.png' | relative_url }}" alt="" title="star formation simulation"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/08.png' | relative_url }}" alt="" title="star formation simulation"/>
    </div>
</div>
<div class="caption">
    When the simulation runs, the gas cloud compresses under the the force of it's own gravity. Because sub-clouds also collapse, it fragments and multiple structures form.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/01.png' | relative_url }}" alt="" title="different zoom levels"/>
    </div>
</div>
<div class="caption">
    Multiple zoom levels of the simulation composited on top of each other. This shows the wide range of different scales SPH can handle in one simulation. Since it is based on particles, variable resulotion is almost 'build in'.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-2 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/02.png' | relative_url }}" alt="" title="two protostars merging"/>
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/03.png' | relative_url }}" alt="" title="two protostars merging"/>
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/04.png' | relative_url }}" alt="" title="two protostars merging"/>
    </div>
    <div class="col-sm-2 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/GraSPH/05.png' | relative_url }}" alt="" title="two protostars merging"/>
    </div>
</div>
<div class="caption">
    Here two protostars move very close to each other. The form a binary system, orbiting each other. The system is not stable and the stars move closer until they finally merge.
</div>
