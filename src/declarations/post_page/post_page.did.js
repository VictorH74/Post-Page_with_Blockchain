export const idlFactory = ({ IDL }) => {
  const Comment = IDL.Record({
    'id' : IDL.Text,
    'isArtificial' : IDL.Bool,
    'content' : IDL.Text,
    'user' : IDL.Text,
    'likes' : IDL.Nat,
    'moment' : IDL.Text,
  });
  return IDL.Service({
    'deleteComment' : IDL.Func([IDL.Text], [], ['oneway']),
    'newComment' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Nat, IDL.Bool],
        [],
        ['oneway'],
      ),
    'readComments' : IDL.Func([], [IDL.Vec(Comment)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
