/** Controller: the project list on the Work page. */
import { PROJECTS } from '../models/projects.js';
import { getLang } from '../models/preferences.js';
import { renderProjects } from '../views/projectsView.js';
import { byId } from '../utils/dom.js';

/** Render before the reveal animations start. */
export function renderProjectList() {
  const list = byId('projectList');
  if (list) renderProjects(list, PROJECTS, getLang());
}
