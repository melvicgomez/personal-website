import React from 'react';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { PolarArea, Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend
);

type ChartData = {
  label: string;
  point: number;
  color: string;
};

const chartRawData: ChartData[] = [
  {
    label: 'ReactJS',
    point: 10,
    color: 'rgba(87, 88, 187,0.8)',
  },
  {
    label: 'React Native',
    point: 10,
    color: 'rgba(111, 30, 81,0.8)',
  },
  {
    label: 'Frontend',
    point: 8.5,
    color: 'rgba(44, 44, 84,0.8)',
  },
  {
    label: 'HTML',
    point: 10,
    color: 'rgba(27, 20, 100,0.8)',
  },
  {
    label: 'CSS',
    point: 10,
    color: 'rgba(0, 98, 102,0.8)',
  },
  {
    label: 'Javascript',
    point: 10,
    color: 'rgba(234, 32, 39,0.8)',
  },
  {
    label: 'NodeJS',
    point: 6,
    color: 'rgba(247, 159, 31,0.8)',
  },
  {
    label: 'MySQL',
    point: 9,
    color: 'rgba(61, 61, 61,0.8)',
  },
  {
    label: 'CI/CD',
    point: 7,
    color: 'rgba(255, 56, 56,0.8)',
  },

  {
    label: 'Typescript',
    point: 8,
    color: 'rgba(0, 148, 50,0.8)',
  },
  {
    label: 'ES6',
    point: 7,
    color: 'rgba(6, 82, 221,0.8)',
  },
  {
    label: 'UI/UX Design',
    point: 6,
    color: 'rgba(255, 159, 26,0.8)',
  },

  {
    label: 'Backend',
    point: 10,
    color: 'rgba(255, 82, 82,0.8)',
  },
  {
    label: 'Project Management',
    point: 4,
    color: 'rgba(34, 112, 147,0.8)',
  },
  {
    label: 'Team Management',
    point: 4,
    color: 'rgba(33, 140, 116,0.8)',
  },
];

export const polarData = {
  labels: chartRawData.map((data) => data.label),
  datasets: [
    {
      label: 'My Current Stats',
      data: chartRawData.map((data) => data.point),
      backgroundColor: chartRawData.map((data) => data.color),
      borderWidth: 1,
      hoverBorderWidth: 1,
      hoverBorderColor: 'rgba(185, 28, 28,0.5)',
    },
  ],
};
export const radarData = {
  labels: chartRawData.map((data) => data.label),
  datasets: [
    {
      label: 'My Current Stats',
      data: chartRawData.map((data) => data.point),
      backgroundColor: 'rgba(185, 28, 28,0.2)',
      borderColor: 'rgba(255, 99, 132,0.1)',
      borderWidth: 1,
    },
  ],
};

import {
  CodeIcon,
  PencilAltIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { Props } from '../../types/common';

const features = [
  {
    name: 'SOFTWARE DEVELOPMENT',
    description:
      'I developed various websites and applications in different industries. Played all roles in software development lifecycle — support, designer, developer, CI/CD and db manager.',
    icon: CodeIcon,
  },
  {
    name: 'UI/UX DESIGN',
    description:
      'Self-taught UI designer and inspired by Steve Schoger. I had to scale up in order to developed my previous projects.',
    icon: PencilAltIcon,
  },
  {
    name: 'TEAM MANAGEMENT',
    description: `I started training and managing interns in my previous work. Later on, my team added 3 developers which I co-managed by reviewing their mid-year performance and breaking down the tasks.`,
    icon: UserGroupIcon,
  },
];

const SkillCompetencies: React.FC<Props> = () => (
  <StyledWrapper>
    <div className="grid grid-cols-2 px-4 md:px-16 lg:px-32 py-4 md:py-20 bg-gray-100 lg:grid-cols-5">
      <div className="col-span-2">
        <p className="text-4xl leading-8 font-extrabold tracking-tight text-gray-900">
          Skill Competencies
        </p>
        <p className="mt-4 max-w-2xl text-lg text-gray-700 leading-relaxed">
          On my early career years working hard to developed and enhanced these
          skills by myself. I've been involved in each step of the process from
          <b className="text-gray-900"> start (planning)</b> and{' '}
          <b className="text-gray-900">delivery (deployment)</b>.
        </p>

        <div className="mt-10">
          <dl className="space-y-5 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-5">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-red-700 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="ml-16 text-base text-gray-500 leading-snug">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="col-span-2 lg:col-start-4 mt-16 lg:mt-0">
        <p className="text-4xl leading-8 font-extrabold tracking-tight text-gray-900 text-center">
          Current Stats (2022)
        </p>
        <div className="hidden md:block mt-4">
          <PolarArea redraw data={polarData} />
        </div>
        <div className="block md:hidden">
          <Radar
            redraw
            data={radarData}
            options={{ plugins: { legend: { display: false } } }}
          />
        </div>
      </div>
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  .dev-name {
    text-shadow: 2px 2px 5px #0000004a;
  }

  .dev-role {
    text-shadow: 2px 2px 5px #0000004a;
    position: relative;
    ::after {
      content: ' ';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      height: 0.5rem;
      z-index: -1;
      background-color: #fad127;
    }

    // Breakpoint = MD for medium size devices
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      ::after {
        right: 0;
        margin: auto;
      }
    }
  }
`;

export default SkillCompetencies;
