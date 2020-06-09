const url = '/api/v1/admin/distances/3426/results/template';
const headers = {
  Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYmFja2VuZC9hcGkvdjEvYWRtaW4vdG9rZW5zIiwiaWF0IjoxNTkxNjkxMjEzLCJleHAiOjE1OTI1NTUyMTMsIm5iZiI6MTU5MTY5MTIxMywianRpIjoiUzh6SDVTNmhCc2hYY2I2UiIsInN1YiI6MTQ2MywicHJ2IjoiNWE0MDA3NzcwZDM0ZDA0NWFmNTg1OWQwZGM4ZWI0NDA0YzNiNTk4MCJ9.xXMMT6NnzQhs3hPhl84YSWpHfe3ZYmTXYfx4Ii7yJnY',
  locale: 'en',

}

function generateRequestSettingsBinary() {
  return { url, headers };
}

export { generateRequestSettingsBinary };
