import { PresentStudentsItem } from "./items/present-students-item";
import { PreviousStudentsItem } from "./items/previous-students-item";
import { ProjectParticipationItem } from "./items/project-participation-item";
import { PublicationsItem } from "./items/publications-item";
import { ResearchAreaItem } from "./items/research-area-item";
import { ThesisItem } from "./items/thesis-item";
import { ResearchSection } from "./research-section";

export interface ResearchContent {
    researchAreas: ResearchSection<ResearchAreaItem>;
    presentStudents: ResearchSection<PresentStudentsItem>;
    previousStudents: ResearchSection<PreviousStudentsItem>;
    publications: ResearchSection<PublicationsItem>;
    projectParticipation: ResearchSection<ProjectParticipationItem>;
    thesis: ResearchSection<ThesisItem>;
}
