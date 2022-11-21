// TODO:前はredux sliceでしたが中身がpseudo sliceにお引越ししたため、ただのcunstom areaにまつわるtypeと初期値置き場になりました。そのうちどっかに移動させるので、一旦このままで
export type cssCustomAreaType = {
    width: boolean
    height: boolean
    padding: boolean
    fontSize: boolean
    borderColor: boolean
    borderStyle: boolean
    borderWidth: boolean
    borderRadius: boolean
    color: boolean
    backgroundColor: boolean
}

export const cssCustomAreaDisplay: cssCustomAreaType = {
    width: false,
    height: false,
    padding: false,
    fontSize: false,
    borderColor: false,
    borderStyle: false,
    borderWidth: false,
    borderRadius: false,
    color: false,
    backgroundColor: false,
}
