import { Typography } from '@mui/material';
import { Project } from 'src/models/Project';

const ProjectCard: React.FC<Project> = (props) => {
  return (
    <div
      className="
    flex-1 flex flex-col justify-center
    relative text-white
    p-4 border-b border-white/30 last:border-b-0 md:border-b-0
    md:min-w-md md:p-5 select-none
    md:after:absolute md:after:top-[10%] md:after:right-0 md:after:w-px md:after:h-[80%] md:after:bg-neutral-700 md:last:after:hidden
    "
    >
      <Typography variant="h6" className="-mb-2">
        <strong className="text-red-400">{props.title}</strong> • {props.year}
      </Typography>
      <Typography fontStyle="italic" className="mb-4" variant="h6">
        {props.role}
      </Typography>
      <Typography className="mb-4" variant="body2">
        {props.shortDescription}
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
  );
};
export default ProjectCard;
