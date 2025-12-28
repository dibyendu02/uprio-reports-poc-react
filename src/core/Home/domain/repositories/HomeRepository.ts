import { SubjectEntity } from "@/commons/domain/entities/SubjectEntity";

export abstract class HomeRepository {
  abstract getSubjects(): Promise<SubjectEntity[]>;
}
