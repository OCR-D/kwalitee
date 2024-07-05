import type { EvalDefinition, EvaluationRun, GroundTruth, Workflow } from "@/types"

const baseUrlOld = 'https://raw.githubusercontent.com/OCR-D/quiver-back-end/main/data'
const baseUrl = 'https://quiver-dev.sub.uni-goettingen.de/api'
async function getProjects() {
    return await request(baseUrlOld + '/repos.json')
}

async function getOcrdAllReleases() {
    return await request(baseUrlOld + '/ocrd_all_releases.json')
}

async function getEvalDefinitions(): Promise<EvalDefinitions> {
    return await request(baseUrlOld + '/metrics_definitions.json')
}

async function getWorkflows(): Promise<Workflow[]> {
    return await request(baseUrl + '/workflows')
}

async function getGroundTruth(): Promise<GroundTruth[]> {
    return await request(baseUrl + '/gt')
}

async function getRuns(gtId?: string, workflowId?: string): Promise<EvaluationRun[]> {
    let path = `${baseUrl}/runs`

    if (gtId) path += `/${gtId}`
    if (workflowId) path += `/${workflowId}`

    return await request(path)
}

async function getLatestRuns(gtId?: string, workflowId?: string): Promise<EvaluationRun[]> {
    let path = `${baseUrl}/runs`

    if (gtId) path += `/${gtId}`
    if (workflowId) path += `/${workflowId}`

    path += '/latest'

    return await request(path)
}

async function request (url: string) {
    const response = await fetch(url)
    return await response.json()
}

export default {
    getProjects,
    getWorkflows,
    getGroundTruth,
    getEvalDefinitions,
    getOcrdAllReleases,
    getRuns,
    getLatestRuns
}
