---
layout: page
title: CIRCULATION
description: An attempt on interactive climate simulation.
img: /assets/img/GraSPH/preview.png
importance: 2
---

<a href="https://github.com/hschwane/CIRCULATION"><i class="fab fa-github"></i> view on github</a>

Many people only showcase the projects they consider sucessfull. 
Not only does this create unrealistic expectations of how the research process looks like, 
it also disregards how much can be learned, even the goals set at the start of a project are not met.

`CIRCULATION` stands for Cuda InteRactive Climate simULATION. The idea was to build a prototype for a new climate simulation code to run on GPUs.
It should have featured a user interface for changeing initial conditions and simulation settings, 
as well as a interactive 3D visualization that is updated while the simulation is runniong. 
The simulation of compressible fluids in spherical coordinates proved to be quite hard. And multiple difficulties were encountered along the way. 
In the end of the allocated timeframe of the project (one day per week for one semester), 
the projects code resembles a collection of experiments more than a finished prototype.

I still belive that building such a code is possible given more time and and the support of experienced meteorologists. It could also be extended to run on 
modern supercomputers which feature more and more GPU nodes. 
The lessons learned from those experiments are now used by [scientists at ETHZ](https://iac.ethz.ch/group/atmospheric-predictability.html) to advance their research.  

The project [documentation](/assets/pdf/schwanekamp2020interactiveMeteorology.pdf) describes all explored methods and documents the lessons learned. 
While it might be formatted like a research paper it was not peer reviewed and published in the traditional way. 
It is merly a project documentation and should be treated as such.
