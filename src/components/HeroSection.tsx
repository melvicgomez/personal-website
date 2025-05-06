/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import { DefaultProps } from 'src/types/Component';
import BrandLogo from './BrandLogo';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { GitHub, LinkedIn, PictureAsPdf } from '@mui/icons-material';

const HeroSection = React.forwardRef<HTMLDivElement, DefaultProps>(
  ({ className }, ref) => {
    return (
      <section ref={ref} className={className}>
        <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
          <div>
            <BrandLogo />
          </div>
          <div className="mb-4">
            <Typography
              variant="h2"
              className="-mb-3 text-red-600"
              fontWeight={600}
            >
              Melvic Gomez
            </Typography>
            <Typography variant="h5" className="text-red-700" fontWeight={400}>
              FULL STACK DEVELOPER
            </Typography>
          </div>
          <div className="flex flex-col gap-y-4 text-white mb-4">
            <Typography variant="body1">
              I'm a developer passionate about crafting modern web apps,
              reviving legacy projects with a forward-thinking mindset, and
              growing side projects into solid platforms. My focus isn't just on
              performance or scale—it's on maintainability and creating
              codebases that others enjoy contributing to.
            </Typography>
            <Typography variant="body1">
              I graduated with a BSIT from Bulacan State University and have
              built software across industries—from real estate to startups. One
              of my proudest moments was delivering three full-stack projects in
              just eight months as a solo dev.
            </Typography>
            <Typography variant="body1">
              With a strong foundation in JavaScript and TypeScript, I can adapt
              to diverse architectures with ease. Outside of work, you’ll find
              me on a bike trail or with a good cup of local coffee and a
              self-help book that fuels my growth as a developer and leader.
            </Typography>
            <Typography variant="body1">
              I believe that <b>if no path exists, we should make one.</b>
            </Typography>
          </div>

          <div>
            <Tooltip title="Github" arrow>
              <IconButton aria-label="Github">
                <GitHub className="text-red-200" />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow>
              <IconButton aria-label="LinkedIn">
                <LinkedIn className="text-red-200" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Résumé" arrow>
              <IconButton aria-label="Résumé in PDF">
                <PictureAsPdf className="text-red-200" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = 'HeroSection';

export default HeroSection;
