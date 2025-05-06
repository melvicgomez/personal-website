import { Typography } from '@mui/material';
import { Experience } from 'src/models/Experience';

const ExperienceCard: React.FC<Experience> = (props) => {
  const [lastWorkPosition, ...prevWorkPosition] = props.position;
  return (
    <div className="p-5 border-b last:border-b-0 md:border-b-0 border-white/30 text-white hover:border-1 md:border-neutral-950/80 hover:bg-neutral-900 select-none flex flex-col md:flex-row md:gap-10">
      <div>
        <Typography variant="h6" fontStyle={'italic'}>
          {props.dtRange}
        </Typography>
      </div>
      <div className="flex-1">
        <Typography variant="h6">
          <strong className="text-red-400">{lastWorkPosition}</strong> •{' '}
          {props.company}
        </Typography>
        {prevWorkPosition.length > 0 &&
          prevWorkPosition.map((pos) => (
            <Typography key={pos} className="opacity-65">
              {pos}
            </Typography>
          ))}
        <Typography variant="body2" className="opacity-90 my-4">
          {props.description}
        </Typography>
        <ul className="flex flex-wrap" aria-label="Technologies used">
          {props.stack.length > 0 &&
            props.stack.map((stack) => (
              <li className="mr-1.5 mt-2" key={stack}>
                <div className="flex items-center rounded-full bg-red-400/10 px-3 py-1 text-xs font-medium leading-5 text-red-300 ">
                  {stack}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default ExperienceCard;
