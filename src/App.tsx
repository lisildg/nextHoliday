const HOLIDAYS = [
  {
    date: new Date("2023-01-01"),
    name: "Año Nuevo",
  },
  {
    date: new Date("2023-02-27"),
    name: "Carnaval",
  },
  {
    date: new Date("2023-02-28"),
    name: "Carnaval",
  },
  {
    date: new Date("2023-03-24"),
    name: "Día Nacional de la Memoria por la Verdad y la Justicia",
  },
  {
    date: new Date("2023-03-30"),
    name: "Viernes Santo",
  },
  {
    date: new Date("2023-04-02"),
    name: "Día del Veterano y de los Caídos en la Guerra de Malvinas",
  },
  {
    date: new Date("2023-05-01"),
    name: "Día del Trabajador",
  },
  {
    date: new Date("2023-05-25"),
    name: "Día de la Revolución de Mayo",
  },
  {
    date: new Date("2023-06-20"),
    name: "Día de la Bandera",
  },
  {
    date: new Date("2023-07-09"),
    name: "Día de la Independencia",
  },
  {
    date: new Date("2023-08-17"),
    name: "Paso a la Inmortalidad del General José de San Martín",
  },
  {
    date: new Date("2023-10-12"),
    name: "Día del Respeto a la Diversidad Cultural",
  },
  {
    date: new Date("2023-11-20"),
    name: "Día de la Soberanía Nacional",
  },
  {
    date: new Date("2023-12-08"),
    name: "Día de la Inmaculada Concepción",
  },
  {
    date: new Date("2023-12-25"),
    name: "Navidad",
  },
];

const today = new Date();
const nextHoliday = HOLIDAYS.find((holiday) => holiday.date > today) || {
  ...HOLIDAYS[0],
   date: new Date(
  new Date(HOLIDAYS[0].date).getFullYear() + 1,
  new Date(HOLIDAYS[0].date).getMonth(),
  new Date(HOLIDAYS[0].date).getDate() + 1,
  ),
} ;

const antHoliday = HOLIDAYS.filter(holiday => holiday.date < today).pop()
const dieferenciaMilisegundos = nextHoliday.date.getTime() - today.getTime();
const dayDiff = Math.round(dieferenciaMilisegundos / 86400000);

const rtf = new Intl.RelativeTimeFormat("es-AR");

function App() {
  return (
    <main>
      <h1>El proximo feriado {nextHoliday.name} es {rtf.format(dayDiff, "days")} </h1>
      <br/>
      <h3>El feriado anterior fue {antHoliday?.name}</h3>
    </main>
  );
}

export default App;
