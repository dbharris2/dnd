const React: any = require('react');

/* Private API */

function levelsDeepToString(levelsDeep: number): string {
  var ret: string = '';
  for (var i: number = 0; i < levelsDeep; i++) {
    ret += '-';
  }
  return ret;
}

function renderEntryWithLevelsDeep(
  title: string,
  description: string,
  levelsDeep: number,
) {
  return (
    <div>
      <b>{levelsDeepToString(levelsDeep)} {title}</b>: {description}
    </div>
  );
}

function renderDictionaryWithTitleAndLevelsDeep(
  dictionary: Object,
  title: ?string,
  levelsDeep: number
) {
  return(
    <div>
      {title != null ? <b>{title}:</b> : <div></div>}
      {
        Object.keys(dictionary).map(function(key: string) {
          const value = dictionary[key];
          if (Array.isArray(value)) {
            return renderArrayWithTitle(value, key);
          } else if (value.constructor == Object) {
            return renderDictionaryWithTitleAndLevelsDeep(
              value,
              key,
              levelsDeep+1,
            );
          } else {
            return renderEntryWithLevelsDeep(key, value, levelsDeep);
          }
        })
      }
    </div>
  );
}

function renderDictionaryWithTitle(dictionary: Object, title: ?string) {
  return renderDictionaryWithTitleAndLevelsDeep(dictionary, title, 0);
}

/* Public API */

export function renderEntry(title: string, description: string) {
  return renderEntryWithLevelsDeep(title, description, 0);
}

export function renderArrayWithTitle(array: array, title: string) {
  return(
    <div key={title}>
      {renderEntry(title, array.join(', '))}
    </div>
  );
}

export function renderDictionary(dictionary: Object) {
  return renderDictionaryWithTitle(dictionary, null)
}
