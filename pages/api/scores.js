const scoresData = [
  { id: 1, tech_name: 'Abhijith K R', isms_score: null, qms_score: null, bcp_result: null },
  { id: 2, tech_name: 'Akhil.ep', isms_score: null, qms_score: null, bcp_result: null },
  { id: 3, tech_name: 'Ameer M S', isms_score: null, qms_score: null, bcp_result: null },
  { id: 4, tech_name: 'Anoop.g', isms_score: null, qms_score: null, bcp_result: null },
  { id: 5, tech_name: 'Arathi J', isms_score: null, qms_score: null, bcp_result: null },
  { id: 6, tech_name: 'Devaprasad', isms_score: null, qms_score: null, bcp_result: null },
  { id: 7, tech_name: 'Krishna.pj', isms_score: null, qms_score: null, bcp_result: null },
  { id: 8, tech_name: 'Krishnadas D', isms_score: null, qms_score: null, bcp_result: null },
  { id: 9, tech_name: 'Kumar C', isms_score: null, qms_score: null, bcp_result: null },
  { id: 10, tech_name: 'Mojin T', isms_score: null, qms_score: null, bcp_result: null },
  { id: 11, tech_name: 'Harsha.t', isms_score: null, qms_score: null, bcp_result: null },
  { id: 12, tech_name: 'Noufiya N', isms_score: null, qms_score: null, bcp_result: null },
  { id: 13, tech_name: 'Ranit.b', isms_score: null, qms_score: null, bcp_result: null },
  { id: 14, tech_name: 'Sijin', isms_score: null, qms_score: null, bcp_result: null },
  { id: 15, tech_name: 'sidharth.ps', isms_score: null, qms_score: null, bcp_result: null },
  { id: 16, tech_name: 'aaron.mm', isms_score: null, qms_score: null, bcp_result: null },
  { id: 17, tech_name: 'Sufiyan.m', isms_score: null, qms_score: null, bcp_result: null }
];

export default function handler(req, res) {
  res.status(200).json(scoresData);
}
