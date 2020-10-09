export const getSingleExercise = async id => {
  const idData = new FormData();
  idData.append("id", id);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  var parameters = {
    method: "POST",
    body: idData,
    redirect: "follow"
  };

  const response = await fetch("http://localhost:8000/exercise/", parameters);
  const data = await response.json();
  console.log("getting single exercise..");
  return data;
};

export const getLatestExercises = async () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  var parameters = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  };

  const response = await fetch("http://localhost:8000/exercises/", parameters);
  const data = await response.json();
  console.log("getting latest exercises..");
  return data;
};

export const updateExercise = async (id, content, add, rem) => {
  const newdata = new FormData();
  newdata.append("content", content);
  newdata.append("relations", add + "/" + rem);

  var parameters = {
    method: "PATCH",
    redirect: "follow",
    body: newdata
  };

  const response = await fetch(
    "http://localhost:8000/exercises/" + id + "/",
    parameters
  );
  const data = await response.json();
  console.log("updating existing exercise..");
  return data;
};

export const deleteExercise = async id => {
  var parameters = {
    method: "DELETE",
    redirect: "follow"
  };

  const response = await fetch(
    "http://localhost:8000/exercises/" + id + "/",
    parameters
  );
  console.log("deleting exercise..");
};