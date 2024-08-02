// types.ts
export interface User {
  id: string;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string; // Include the token field in the User type
}

export interface SignInResponse {
  user: User;
}

export interface Location {
  id: string;
  createdAt: string;
  modifiedAt: string;
  location: string;
  country: string;
}

export interface UserType {
  id: string;
  createdAt: string;
  modifiedAt: string;
  name: string;
  priority: number;
}

export interface UserProfile {
  id: string;
  createdAt: string;
  modifiedAt: string;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  coverPicture: string;
  gender: string;
  birthDate: {
    year: number;
    month: number;
    day: number;
    dayOfWeek: number;
    dayOfYear: number;
    dayNumber: number;
  };
  phone: string;
  userTypeId: string;
  userType: UserType;
  groupId: string;
  group: {
    id: string;
    createdAt: string;
    modifiedAt: string;
    name: string;
    abbreviation: string;
    generation: string;
    year: string;
    locationId: string;
    location: Location;
  };
  codeforcesHandle: string;
  numberOfProblemsTaken: number;
  numberOfProblemsSolved: number;
}

export interface UserQuestionResult {
  id: string;
  createdAt: string;
  modifiedAt: string;
  points: number;
  rejectedAttemptCount: number;
  bestSubmissionTimeSeconds: string;
  questionId: string;
  question: string;
  userId: string;
  user: UserProfile;
}

interface Team {
  // Define properties for the Team interface
}

export interface TeamQuestionResult {
  id: string;
  createdAt: string;
  modifiedAt: string;
  points: number;
  rejectedAttemptCount: number;
  bestSubmissionTimeSeconds: string;
  questionId: string;
  question: string;
  teamId: string;
  team: any;
}

export interface Question {
  id: string;
  createdAt: string;
  modifiedAt: string;
  contestId: string;
  globalQuestionUrl: string;
  name: string;
  index: string;
  userQuestionResults: UserQuestionResult[];
  teamQuestionResults: TeamQuestionResult[];
}

export interface ContestGroup {
  groupId: string;
  group: {
    name: string;
    abbreviation: string;
    locationId: string;
    location: Location;
    generation: string;
    year: string;
  };
}

export interface UserContestResult {
  id: string;
  createdAt: string;
  modifiedAt: string;
  contestId: string;
  points: number;
  rank: number;
  penalty: number;
  successfulHackCount: number;
  unsuccessfulHackCount: number;
  isVirtual: boolean;
  userId: string;
  user: User;
}
export interface Contest {
  id: string;
  createdAt: string;
  modifiedAt: string;
  contestGlobalId: string;
  contestUrl: string;
  name: string;
  type: string;
  durationSeconds: number;
  startTimeSeconds: number;
  relativeTimeSeconds: number;
  preparedBy: string;
  websiteUrl: string;
  description: string;
  difficulty: string;
  kind: string;
  season: string;
  status: string;
  participantsNumber: number;
  questionsNumber: number;
  contestGroups: ContestGroup[];
  questions: Question[];
  userContestResults: UserContestResult[];
}
