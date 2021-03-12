---
layout: page
title: GraSPH2
description: GPU based particle simulation for planet formation.
img: /assets/img/GraSPH2/graSPH2_main.png
importance: 5
---

<a href="https://github.com/hschwane/GraSPH2"><i class="fab fa-github"></i> view on github</a><br>
<a href="/assets/pdf/schwanekampAndKraft2020PlanetFormation.pdf "><i class="fas fa-book"></i> pdf documentation</a>

GraSPH2 is the successor of my interactive star formation simulation [GraSPH](/projects/GraSPH). It is designed more flexible and uses CUDA instead of OpenGL compute shader, which allows it to run on HPC systems. The physical model was extended to handle solid bodies and is now designed much more flexible to allow for future improvements. It can be used for all kinds of particle simulations that require a n-body component.

The interactive 3D visualization was reworked

In addition to the real time visualization, data can now be stored in files to analyze, view or .  
